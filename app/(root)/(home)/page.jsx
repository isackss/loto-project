import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="mt-10 flex w-full gap-4">
        <Link href="/pos/sales" className="w-full">
          <Button className="flex w-full flex-col gap-1 p-8">
            <div>
              <div>Icon</div>
            </div>
            <div>Ventas diarias</div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
