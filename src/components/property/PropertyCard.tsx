import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, MapPin, Bed, Bath, Maximize } from "lucide-react";
import { motion } from "framer-motion";

interface PropertyCardProps {
  id?: string;
  title?: string;
  price?: number;
  location?: string;
  image?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  type?: string;
  isFeatured?: boolean;
  onSave?: (id: string) => void;
  onBook?: (id: string) => void;
}

const PropertyCard = ({
  id = "1",
  title = "Modern Apartment with Ocean View",
  price = 450000,
  location = "Downtown, New York",
  image = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  bedrooms = 3,
  bathrooms = 2,
  area = 1200,
  type = "Apartment",
  isFeatured = false,
  onSave = () => {},
  onBook = () => {},
}: PropertyCardProps) => {
  const [isSaved, setIsSaved] = React.useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave(id);
  };

  const handleBook = () => {
    onBook(id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col bg-card border-border hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {isFeatured && (
            <Badge
              variant="default"
              className="absolute top-2 left-2 bg-primary text-primary-foreground"
            >
              Featured
            </Badge>
          )}

          <Badge
            variant="secondary"
            className="absolute top-2 right-2 bg-secondary text-secondary-foreground"
          >
            {type}
          </Badge>
        </div>

        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
              <div className="flex items-center text-muted-foreground text-sm mt-1">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span className="line-clamp-1">{location}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">${price.toLocaleString()}</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pb-2 flex-grow">
          <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1.5" />
              <span>
                {bedrooms} {bedrooms === 1 ? "Bed" : "Beds"}
              </span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1.5" />
              <span>
                {bathrooms} {bathrooms === 1 ? "Bath" : "Baths"}
              </span>
            </div>
            <div className="flex items-center">
              <Maximize className="h-4 w-4 mr-1.5" />
              <span>{area} sq ft</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-2 flex justify-between gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={handleSave}
          >
            <Heart
              className={`h-4 w-4 mr-2 ${isSaved ? "fill-red-500 text-red-500" : ""}`}
            />
            {isSaved ? "Saved" : "Save"}
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={handleBook}
          >
            <Calendar className="h-4 w-4 mr-2" />
            Book Viewing
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PropertyCard;
