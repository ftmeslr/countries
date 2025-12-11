import MainCard from "../../components/MainCard/MinaCard"
import LabelValue from "./components/labelValue/labelValue"

const countries = [
    { name: "Germany", population: "38 million", capital: "Berlin", language: "German", imageUrl: "https://picsum.photos/seed/germany/400/300" },
    { name: "France", population: "67 million", capital: "Paris", language: "French", imageUrl: "https://picsum.photos/seed/france/400/300" },
    { name: "Spain", population: "47 million", capital: "Madrid", language: "Spanish", imageUrl: "https://picsum.photos/seed/spain/400/300" },
    { name: "Italy", population: "60 million", capital: "Rome", language: "Italian", imageUrl: "https://picsum.photos/seed/italy/400/300" },
    { name: "Netherlands", population: "17 million", capital: "Amsterdam", language: "Dutch", imageUrl: "https://picsum.photos/seed/netherlands/400/300" },
    { name: "Sweden", population: "10 million", capital: "Stockholm", language: "Swedish", imageUrl: "https://picsum.photos/seed/sweden/400/300" },
    { name: "Norway", population: "5.4 million", capital: "Oslo", language: "Norwegian", imageUrl: "https://picsum.photos/seed/norway/400/300" },
    { name: "Poland", population: "38 million", capital: "Warsaw", language: "Polish", imageUrl: "https://picsum.photos/seed/poland/400/300" },
];

const HomePge = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {countries.map((c) => (
                <MainCard key={c.name} imageUrl={c.imageUrl}>
                    <div className='flex flex-col items-start p-4'>
                        <p className="text-gray-700 text-xl font-bold mb-2">{c.name}</p>
                        <LabelValue label="Population" value={c.population} />
                        <LabelValue label="Capital" value={c.capital} />
                        <LabelValue label="Language" value={c.language} />
                    </div>
                </MainCard>
            ))}
        </div>
    )
}

export default HomePge