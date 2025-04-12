"use client";
import { CldUploadWidget } from "next-cloudinary";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <CldUploadWidget
          uploadPreset="test-preset"
          onSuccess={(results) => {
            console.log("results", results);
            console.log("Public ID", results.info.public_id);
          }}
          options={{
            sources: ["local"],
            maxFileSize: 1000000,
            multiple: false,
            clientAllowedFormats: ["image"],
          }}
        >
          {({ open }) => {
            return <button onClick={() => open()}>Upload an Image</button>;
          }}
        </CldUploadWidget>
      </main>
    </div>
  );
}
