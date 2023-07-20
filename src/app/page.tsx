import { Suspense } from "react";
import DevicesList from "./DevicesList";

export default async function Page() {
  return (
    <main>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-4">
        <Suspense fallback={<p>Loading...</p>}>
          <DevicesList />
        </Suspense>
      </div>
    </main>
  );
}
