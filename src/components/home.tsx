import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Home,
  Building,
  Bed,
  Bath,
  ArrowRight,
  Heart,
  Calendar,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const HomePage = () => {
  // Mock data for featured properties
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$2,500,000",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      beds: 5,
      baths: 4,
      sqft: 3200,
      type: "Villa",
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      location: "Manhattan, NY",
      price: "$3,750,000",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      beds: 3,
      baths: 3.5,
      sqft: 2800,
      type: "Penthouse",
    },
    {
      id: 3,
      title: "Waterfront Condo",
      location: "Miami, FL",
      price: "$1,200,000",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      beds: 2,
      baths: 2,
      sqft: 1800,
      type: "Condo",
    },
  ];

  // Mock data for agents
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Agent",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      properties: 24,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Luxury Specialist",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      properties: 18,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "Commercial Expert",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica",
      properties: 31,
      rating: 4.7,
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-60 h-60 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Dream Property
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Discover the perfect home with our AI-powered property search and
              expert agents
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 md:p-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Tabs defaultValue="buy" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="buy">Buy</TabsTrigger>
                <TabsTrigger value="rent">Rent</TabsTrigger>
                <TabsTrigger value="sell">Sell</TabsTrigger>
              </TabsList>
              <TabsContent value="buy" className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <Input
                        type="text"
                        placeholder="Enter location, property type, or keyword"
                        className="pl-10 bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-slate-600"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <select className="rounded-md border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 p-2 text-sm">
                      <option>Property Type</option>
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Condo</option>
                      <option>Villa</option>
                    </select>
                    <select className="rounded-md border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 p-2 text-sm">
                      <option>Price Range</option>
                      <option>$100k - $500k</option>
                      <option>$500k - $1M</option>
                      <option>$1M - $5M</option>
                      <option>$5M+</option>
                    </select>
                    <Button className="col-span-2 md:col-span-1">Search</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="rent" className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <Input
                        type="text"
                        placeholder="Enter location or property type"
                        className="pl-10 bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-slate-600"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <select className="rounded-md border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 p-2 text-sm">
                      <option>Monthly Rent</option>
                      <option>$500 - $1,000</option>
                      <option>$1,000 - $2,500</option>
                      <option>$2,500 - $5,000</option>
                      <option>$5,000+</option>
                    </select>
                    <select className="rounded-md border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 p-2 text-sm">
                      <option>Bedrooms</option>
                      <option>Studio</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3+</option>
                    </select>
                    <Button className="col-span-2 md:col-span-1">Search</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="sell" className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <MapPin
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <Input
                        type="text"
                        placeholder="Enter your property address"
                        className="pl-10 bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-slate-600"
                      />
                    </div>
                  </div>
                  <Button className="md:w-auto">Get Estimate</Button>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <Button variant="outline" className="flex items-center gap-2">
              View All <ArrowRight size={16} />
            </Button>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredProperties.map((property) => (
              <motion.div key={property.id} variants={fadeInUp}>
                <Card className="overflow-hidden h-full bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-64 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-blue-600">
                      {property.type}
                    </Badge>
                    <button className="absolute top-4 left-4 bg-white dark:bg-slate-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                      <Heart
                        size={18}
                        className="text-gray-600 dark:text-gray-300"
                      />
                    </button>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">
                          {property.title}
                        </CardTitle>
                        <div className="flex items-center mt-1 text-gray-500 dark:text-gray-400">
                          <MapPin size={16} className="mr-1" />
                          <span className="text-sm">{property.location}</span>
                        </div>
                      </div>
                      <p className="text-xl font-bold text-blue-600">
                        {property.price}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center border-t border-gray-100 dark:border-slate-700 pt-4">
                      <div className="flex items-center">
                        <Bed
                          size={18}
                          className="mr-2 text-gray-500 dark:text-gray-400"
                        />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center">
                        <Bath
                          size={18}
                          className="mr-2 text-gray-500 dark:text-gray-400"
                        />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center">
                        <Home
                          size={18}
                          className="mr-2 text-gray-500 dark:text-gray-400"
                        />
                        <span>{property.sqft} sqft</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Calendar size={16} /> Schedule Tour
                    </Button>
                    <Button>View Details</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose PeanechEstate
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the future of real estate with our cutting-edge
              platform designed to make your property journey seamless and
              enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="p-6 border border-gray-100 dark:border-slate-700 rounded-xl bg-gray-50 dark:bg-slate-900"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Search
                  className="text-blue-600 dark:text-blue-400"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Search</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our advanced AI algorithms help you find properties that match
                your preferences with incredible accuracy.
              </p>
            </motion.div>

            <motion.div
              className="p-6 border border-gray-100 dark:border-slate-700 rounded-xl bg-gray-50 dark:bg-slate-900"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Building
                  className="text-purple-600 dark:text-purple-400"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Listings</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every property on our platform is verified by our team to ensure
                you get accurate and reliable information.
              </p>
            </motion.div>

            <motion.div
              className="p-6 border border-gray-100 dark:border-slate-700 rounded-xl bg-gray-50 dark:bg-slate-900"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Calendar
                  className="text-green-600 dark:text-green-400"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Scheduling</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Book property viewings with a few clicks and manage all your
                appointments in one place.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Meet Our Agents</h2>
            <Button variant="outline" className="flex items-center gap-2">
              View All <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <motion.div
                key={agent.id}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={agent.image} alt={agent.name} />
                    <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold">{agent.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {agent.role}
                  </p>
                  <div className="flex justify-center gap-4 mb-4">
                    <div className="text-center">
                      <p className="font-bold">{agent.properties}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Properties
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold">{agent.rating}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Rating
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Contact
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8 opacity-90">
            Subscribe to our newsletter to receive the latest property listings
            and market insights.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 flex-1"
            />
            <Button className="bg-white text-blue-600 hover:bg-white/90 hover:text-blue-700">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
