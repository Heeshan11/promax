import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import '@/app/styles/collage.css'
import { IService } from "../interface/interface";

export default function CollageCollection({ data }: { data: IService[] }) {

  return (
    <div className="max-w-full gap-2 grid grid-cols-12  px-8">
      {data.slice(0, 3).map((card) => {
        return (
          <Card className="col-span-12 sm:col-span-4 h-[300px] cursor-pointer card-container rounded-t-lg" key={card.id}>
            <CardHeader className="absolute bg-black/40  z-10 top-0 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">{card.title}</p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="collageImg z-0 w-full h-full object-cover rounded-lg"
              src={card.image}
            />
          </Card>
        )
      })}

      {data.slice(3, 5).map((card) => {
        return (
          <Card isFooterBlurred className="w-full h-[350px] col-span-12 sm:col-span-6  cursor-pointer card-container" key={card.id}>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="collageImg z-0 w-full h-full object-cover rounded-lg"
              src={card.image}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 rounded-b-lg">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white font-semibold">{card.title}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        )
      })}

    </div>
  );
}