import notice1 from "../assets/notice1.jpeg";
import notice2 from "../assets/notice2.jpeg";
import notice3 from "../assets/notice3.jpeg";
import notice4 from "../assets/notice4.jpeg";

const notices = [
  {
    image: notice1,
    date: "July 21 2026",
    title: "छात्रावासको रिक्त कोटा सम्वन्धी अत्यन्त जरुरी सूचना ।",
    description:
      "विषय : महिला फिडर छात्रावासको रिक्त कोटा सम्वन्धी अत्यन्त जरुरी सूचना ।",
  },

  {
    image: notice2,
    date: "July 21 2026",
    title: "प्रथम त्रैमासिक परिक्षाको समय तालिका",
    description: "शैक्षिकसत्र २०८३ को प्रथम त्रैमासिक परिक्षाको समय तालिका",
  },

  {
    image: notice3,
    date: "July 8 2026",
    title: "सुचना!",
    description: "अविभावक भेला सम्बन्धी सुचना!",
  },

  {
    image: notice4,
    date: "May 9 2026",
    title: "नतिजा प्रकशन !",
    description:
      "२०८२ सालकाे कक्षा नर्सरी देखी कक्षा दश सम्मकाे नतिजा प्रकशन सम्बन्धी सुचना!",
  },
];

export default function NoticeBoard() {
  return (
    <div
      className="
bg-white
rounded-2xl
shadow-lg
p-6
border
"
    >
      {/* Heading */}

      <h2
        className="
text-3xl
font-bold
text-blue-700
border-b
pb-3
"
      >
        Digital Notice Board
      </h2>

      {/* Tabs */}

      <div
        className="
flex
gap-3
my-5
"
      >
        <button
          className="
btn
btn-primary
btn-sm
"
        >
          Events
        </button>

        <button
          className="
btn
btn-outline
btn-sm
"
        >
          Latest News
        </button>
      </div>

      {/* Notice List */}

      <div
        className="
space-y-5
max-h-[600px]
overflow-y-auto
pr-2
"
      >
        {notices.map((item, index) => (
          <div
            key={index}
            className="
group
flex
gap-4
border
rounded-xl
p-4
hover:shadow-xl
hover:border-blue-400
transition
bg-gray-50
"
          >
            <img
              src={item.image}
              alt="notice"
              className="
w-28
h-20
object-cover
rounded-lg
"
            />

            <div>
              <p
                className="
text-sm
text-gray-500
"
              >
                {item.date}
              </p>

              <h3
                className="
font-bold
text-xl
group-hover:text-blue-700
transition
"
              >
                {item.title}
              </h3>

              <p
                className="
text-gray-600
text-sm
"
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="
btn
btn-primary
mt-6
w-full
rounded-full
"
      >
        View All Notices
      </button>
    </div>
  );
}
