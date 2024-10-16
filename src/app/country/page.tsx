
import Link from "next/link";
import countries from "../admin/countries/countries";

export default function Country() {
return (
    <div className="flex flex-col justify-center pt-20 items-center h-screen bg-pink-300">
        <div className="bg-cyan-300 p-4 rounded-md">
            <h2 className="text-5xl text-white">List of Countries</h2>
        </div>
        <ul className="space-y-4 mt-4">
            {countries.map((country, index) => (
                <li key={index}>
                    <Link href={`/country/${country.name.toLowerCase()}`}>
                        <span className= "text-xl w-48 h-10 rounded-sm flex items-center justify-center transition-all duration-300 ease-in-out ${country.name.toLowerCase() === 'pakistan' ? '}">
                            {country.name}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);
};