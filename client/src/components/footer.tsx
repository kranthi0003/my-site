import { PROFILE_DATA } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="opacity-80">
          &copy; 2024 {PROFILE_DATA.name}. Created with care to share my story and connect with wonderful people.
        </p>
      </div>
    </footer>
  );
}
