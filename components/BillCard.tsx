"use client";

import { Card, Button } from "flowbite-react";
import Link from "next/link";

interface Bill {
  id: number;
  name: string;
  summary: string;
  initiators: string[];
  category: string;
  date: string;
  votesUp: number;
  votesDown: number;
  comments: number;
}

const BillCard: React.FC<Bill> = ({
  id,
  name,
  summary,
  initiators,
  category,
  date,
  votesUp,
  votesDown,
  comments,
}: Bill) => {
  //const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Link href={`/bill/${id}`} legacyBehavior>
        <Card href="#" className="max-w-sm cursor-pointer">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{date}</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {summary}
          </p>
          <div className="dark:text-white">
            <div className="flex items-center gap-2">
              <span>{votesUp}</span>
              <span>הצביעו בעד</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{votesDown}</span>
              <span>הצביעו נגד</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{comments}</span>
              <span> תגובות</span>
            </div>
            <div className="flex justify-center">
              <div className="p-3 items-center gap-2">
                <Button onClick={(e) => e.preventDefault()}>הצבע בעד</Button>
              </div>
              <div className="p-3 items-center gap-2">
                <Button onClick={(e) => e.preventDefault()}>הצבע נגד</Button>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default BillCard;
