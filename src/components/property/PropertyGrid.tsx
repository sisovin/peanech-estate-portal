import React, { useState } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  SlidersHorizontal,
  Grid3X3,
  List,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import PropertyCard from "./PropertyCard";

interface PropertyGridProps {
  properties?: Property[];
  title?: string;
  subtitle?: string;
}

interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  image: string;
  featured?: boolean;
}

const PropertyGrid = ({
  properties = defaultProperties,
  title = "Featured Properties",
  subtitle = "Explore our handpicked selection of premium properties",
}: PropertyGridProps) => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState<[number, number]>([
    100000, 1000000,
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState<string>("all");
  const [bedrooms, setBedrooms] = useState<string>("any");
  const [sortBy, setSortBy] = useState<string>("featured");

  // Filter properties based on search and filters
  const filteredProperties = properties.filter((property) => {
    // Search query filter
    if (
      searchQuery &&
      !property.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !property.location.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Price range filter
    if (property.price < priceRange[0] || property.price > priceRange[1]) {
      return false;
    }

    // Property type filter
    if (propertyType !== "all" && property.type !== propertyType) {
      return false;
    }

    // Bedrooms filter
    if (bedrooms !== "any") {
      const bedroomCount = parseInt(bedrooms);
      if (property.bedrooms !== bedroomCount) {
        return false;
      }
    }

    return true;
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return parseInt(b.id) - parseInt(a.id);
      case "featured":
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  return (
    <div className="w-full bg-background py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by location, property name..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Price Range</h4>
                      <Slider
                        defaultValue={[priceRange[0], priceRange[1]]}
                        max={2000000}
                        step={10000}
                        onValueChange={(value) =>
                          setPriceRange(value as [number, number])
                        }
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${priceRange[0].toLocaleString()}</span>
                        <span>${priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-2">Property Type</h4>
                      <Select
                        value={propertyType}
                        onValueChange={setPropertyType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="All Types" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="condo">Condo</SelectItem>
                          <SelectItem value="villa">Villa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Bedrooms</h4>
                      <Select value={bedrooms} onValueChange={setBedrooms}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <Button
                        onClick={() => {
                          setPriceRange([100000, 1000000]);
                          setPropertyType("all");
                          setBedrooms("any");
                        }}
                        variant="outline"
                        className="mr-2"
                      >
                        Reset
                      </Button>
                      <Button>Apply Filters</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>

              <div className="hidden md:flex border rounded-md overflow-hidden">
                <Button
                  variant={view === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setView("grid")}
                  className="rounded-none"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={view === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setView("list")}
                  className="rounded-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {sortedProperties.length === 0 ? (
          <Card className="w-full py-16">
            <CardContent className="flex flex-col items-center justify-center">
              <SlidersHorizontal className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">No properties found</h3>
              <p className="text-muted-foreground text-center max-w-md">
                Try adjusting your search criteria or filters to find properties
                that match your preferences.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setPriceRange([100000, 1000000]);
                  setPropertyType("all");
                  setBedrooms("any");
                }}
              >
                Reset All Filters
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div
            className={
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col space-y-4"
            }
          >
            {sortedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                layout={view}
              />
            ))}
          </div>
        )}

        {sortedProperties.length > 0 && (
          <div className="mt-10 flex justify-center">
            <Button variant="outline">Load More Properties</Button>
          </div>
        )}
      </div>
    </div>
  );
};

// Default properties for demonstration
const defaultProperties: Property[] = [
  {
    id: "1",
    title: "Modern Luxury Villa",
    price: 850000,
    location: "Beverly Hills, CA",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    type: "villa",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    featured: true,
  },
  {
    id: "2",
    title: "Downtown Apartment",
    price: 425000,
    location: "Manhattan, NY",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: "apartment",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
  },
  {
    id: "3",
    title: "Seaside Condo",
    price: 650000,
    location: "Miami Beach, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    type: "condo",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    featured: true,
  },
  {
    id: "4",
    title: "Suburban Family Home",
    price: 550000,
    location: "Austin, TX",
    bedrooms: 4,
    bathrooms: 3,
    area: 2400,
    type: "house",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  },
  {
    id: "5",
    title: "Mountain View Cabin",
    price: 375000,
    location: "Aspen, CO",
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    type: "house",
    image:
      "https://images.unsplash.com/photo-1542889601-399c4f3a8402?w=800&q=80",
  },
  {
    id: "6",
    title: "Luxury Penthouse",
    price: 1250000,
    location: "Los Angeles, CA",
    bedrooms: 3,
    bathrooms: 3.5,
    area: 3200,
    type: "apartment",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    featured: true,
  },
];

export default PropertyGrid;
