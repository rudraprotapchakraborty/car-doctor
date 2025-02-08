import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default async function ServicesSection() {
  const servicesCollection = dbConnect(collectionNamesObj.servicesCollection);
  const data = await servicesCollection.find({}).toArray();
  //   const res = await res.json();

  return (
    <div className="grid grid-cols-3">
      {data.map((item) => {
        return (
          <div className="flex justify-center">
            <div className="w-[300px]" key={item._id}>
              <Image
                src={item.img}
                alt={item.title}
                width={314}
                height={208}
              ></Image>
              <h2 className="font-bold text-xl">{item.title}</h2>
              <div className="flex items-center justify-between">
                <p className="font-bold text-xl text-[#FF3811]">
                  Price: ${item.price}
                </p>
                <Link href={`/services/${item._id}`} className="text-[#FF3811]">
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
