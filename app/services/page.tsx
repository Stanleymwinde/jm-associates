import CommonHero from "@/components/common-hero";
import Loading from "@/components/Loading";
import { MainService } from "@/components/ui/services";
import React, { Suspense } from "react";

const page = () => {
  return (
    <>
      <CommonHero title="Services" image="/Home/Consultancy.jpg" />
      <Suspense fallback={<Loading />}>
        <MainService />
      </Suspense>
    </>
  );
};

export default page;
