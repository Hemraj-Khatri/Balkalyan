import principal from "../assets/principal.jpg";

export default function Principal() {
  return (
    <div
      className="
bg-gradient-to-br
from-blue-600
to-blue-800
text-white
rounded-xl
shadow-xl
p-6
"
    >
      <div
        className="
flex
items-center
gap-5
mb-5
"
      >
        <img
          src={principal}
          className="
w-24
h-24
rounded-full
border-4
border-white
object-cover
"
        />

        <div>
          <h2
            className="
text-3xl
font-bold
"
          >
            Message From The Principal
          </h2>

          <p className="text-yellow-300 font-semibold">
            Principal: Tulsi Prasad Shrestha
          </p>
        </div>
      </div>

      <p
        className="
leading-relaxed
text-justify
mb-4
"
      >
        Message from the Principal Dear Parents, Students, and Well-Wishers,
        <br />
        <br />
        It gives me immense pleasure to welcome you to Shree Balkalyan Secondary
        School, Liwang, Rolpa. Our school has always been committed to providing
        quality education by creating a supportive, creative, and disciplined
        learning environment where every student can discover their potential.
        Education is not only about gaining knowledge but also about developing
        confidence, creativity, moral values, and leadership skills. With the
        dedication of our experienced teachers, cooperation from parents, and
        enthusiasm of our students, we are continuously working towards academic
        excellence and the overall development of every learner. We believe that
        every child has unique abilities and talents. Our mission is to nurture
        those talents through innovative teaching methods, modern educational
        practices, extracurricular activities, and a caring school environment.
        I would like to express my sincere gratitude to all parents, teachers,
        students, and community members for their continuous support and trust.
        Principal Shree Balkalyan Secondary School Liwang, Rolpa
      </p>

      <p
        className="
leading-relaxed
text-justify
"
      >
        Our experienced teachers and modern learning facilities help students
        achieve academic excellence along with creativity, leadership and
        discipline. We believe education is not only about books but also about
        building responsible citizens for the future.
      </p>

      <button
        className="
btn
btn-warning
mt-5
rounded-full
"
      >
        Read More
      </button>
    </div>
  );
}
