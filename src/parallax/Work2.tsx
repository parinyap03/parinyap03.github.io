import pokemonv1 from "../assets/pokemonv1.png";
import pokemonv2 from "../assets/pokemonv2.png";
import digital from "../assets/digital.png";
import harry from "../assets/harry.png";
import form from "../assets/form.png";
import quiz from "../assets/quiz.png";
import flex from "../assets/flex.png";
import news from "../assets/news.png";
import vocab from "../assets/vocab.png";
import fromregis from "../assets/redux.png";
const work = [
  {
    name: "Pokemon Dex ver 1",
    image: pokemonv1,
    desc: "a pokemon dex using pokemonapi",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["Tailwind", "HTML", "CSS"],
  },
  {
    name: "Pokemon Dex ver 2",
    image: pokemonv2,
    desc: "a pokemon dex using pokeapi ver. 2",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["API", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Digital Name Card ",
    image: digital,
    desc: "a digital name card",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["API", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Harry Potter API",
    image: harry,
    desc: "learn to use API",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["TS", "API", "AntD", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Register Form",
    image: form,
    desc: "a register form using react-redux",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["TS", "AntD", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Quiz",
    image: quiz,
    desc: "a quiz website using react-redux",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["TS", "AntD", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Layout Flex",
    image: flex,
    desc: "learn to use flex",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["Tailwind", "HTML", "CSS"],
  },
  {
    name: "Ogs News",
    image: news,
    desc: "learn to use react-router-dom",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["TS", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Vocabulary List",
    image: vocab,
    desc: "a vocabulary list website ",
    link: "https://github.com/parinyap03/ogs-assignment2.git",
    skills: ["TS", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Regiter Form ",
    image: fromregis,
    desc: "a regiter form use redux",
    link: "https://github.com/parinyap03/ogs-assignment2.git",
    skills: ["TS", "Tailwind", "HTML", "CSS"],
  },
];
const Work2 = () => {
  const span_2 = [1, 4, 5, 8, 9];

  return (
    <>
      <div className="p-40 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 h-full">
        {work.map((item, index) => (
          <a
            href={item.link}
            className={`group relative flex h-48 items-end  overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${
              span_2.includes(index + 1) ? "md:col-span-2" : ""
            }`}
          >
            <img
              src={item.image}
              loading="lazy"
              alt={item.name}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div className="absolute w-full bg-red-400 -bottom-9 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
              <span className="text-gray-800 font-bold text-3xl mb-5 text-center">
                {item.name}
              </span>
              <p className="text-neutral-800 text-center">{item.desc}</p>
            </div>
          </a>
        ))}
        {/* <a
          href="https://github.com/parinyap03/ogs-assignmentNews.git"
          className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 md:col-span-2"
        >
          <img
            src={pokemonv1}
            loading="lazy"
            alt="Pokemon Dex ver 1"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <div className="absolute w-full bg-red-400 -bottom-9 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span className="text-gray-800 font-bold text-3xl mb-5 text-center">
              Pokemon Dex ver 1
            </span>
            <p className="text-neutral-800 text-center">
              a pokemon dex using pokemonapi
            </p>
          </div>
        </a>
        <a
            href="https://github.com/parinyap03/ogs-assignmentNews.git"
            className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 '
                
          >
            <img
              src={digital}
              loading="lazy"
              alt="Digital Name Card"
              className="absolute inset-0 h-full w-fit object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div className="absolute w-full bg-red-400 -bottom-9 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
              <span className="text-gray-800 font-bold text-3xl mb-5 text-center">
              Digital Name Card
              </span>
              <p className="text-neutral-800 text-center">a digital name card</p>
            </div>
          </a>

          <a
          href="https://github.com/parinyap03/ogs-assignmentNews.git"
          className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 "
        >
          <img
            src={pokemonv1}
            loading="lazy"
            alt="Pokemon Dex ver 1"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <div className="absolute w-full bg-red-400 -bottom-9 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span className="text-gray-800 font-bold text-3xl mb-5 text-center">
              Pokemon Dex ver 1
            </span>
            <p className="text-neutral-800 text-center">
              a pokemon dex using pokemonapi
            </p>
          </div>
        </a>
        <a
            href="https://github.com/parinyap03/ogs-assignmentNews.git"
            className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80  md:col-span-2'
                
          >
            <img
              src={digital}
              loading="lazy"
              alt="Digital Name Card"
              className="absolute inset-0 h-full w-fit object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div className="absolute w-full bg-red-400 -bottom-9 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
              <span className="text-gray-800 font-bold text-3xl mb-5 text-center">
              Digital Name Card
              </span>
              <p className="text-neutral-800 text-center">a digital name card</p>
            </div>
          </a> */}
      </div>
    </>
  );
};

export default Work2;
