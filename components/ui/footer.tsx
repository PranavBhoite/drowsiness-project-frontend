import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="py-4 bg-gray-800 text-white text-center">
      <div className="max-w-6xl mx-auto px-4">
       
        <p className="text-sm">
          © {new Date().getFullYear()} Drowsiness Detection System. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
