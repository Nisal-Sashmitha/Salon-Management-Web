"use client";

import Link from "next/link";

const BookAppointment = () => {
  return (
    <div className="min-h-screen py-20 mt-32">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Feature Comming Soon
          </h1>
          <p className="text-xl text-muted-foreground">
            Schedule your perfect beauty experience in just a few simple steps.
          </p>
          <Link
            href="/services"
            className="text-primary underline mt-4 inline-block"
          >
            Back to services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
