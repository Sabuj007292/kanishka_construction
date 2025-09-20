import Image from "next/image"

const teamMembers = [
  {
    name: "Subrato Sarkar",
    position: "Founder & CEO",
    image: "/professional-construction-ceo-headshot.jpg",
    description:
      "With over 10 years in construction management, Michael founded Kanishka Construction with a vision to revolutionize the industry through quality craftsmanship and innovative building solutions. He holds a Master's in Civil Engineering and is a certified Project Management Professional.",
  },
  // {
  //   name: "Sarah Chen",
  //   position: "Co-Founder & Director of Operations",
  //   image: "/professional-construction-operations-director-head.jpg",
  //   description:
  //     "Sarah brings 15 years of operational excellence to Kanishka Construction. Her expertise in project coordination and client relations has been instrumental in the company's growth. She holds an MBA in Operations Management and is LEED certified.",
  // },
  // {
  //   name: "David Thompson",
  //   position: "Director of Engineering",
  //   image: "/professional-construction-engineer-headshot.jpg",
  //   description:
  //     "David leads our engineering team with 18 years of structural and civil engineering experience. His innovative approach to complex construction challenges has earned recognition in industry publications. He is a licensed Professional Engineer with expertise in sustainable building practices.",
  // },
  {
    name: "Sabuj Prashant Gain",
    position: "Web Developer",
    image: "/sabuj_gain1.png",
    description:
      "Sabuj is the creative mind behind our website, ensuring a seamless and dynamic user experience. With a strong background in front-end and back-end development, Sabuj specializes in building responsive, high-performance websites. With a keen eye for design and functionality, Sabuj brings digital solutions to life with precision and innovation.",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Meet Our Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            The visionary leaders driving Kanishka Construction's commitment to excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - ${member.position}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-4">{member.position}</p>
                <p className="text-muted-foreground leading-relaxed text-pretty">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-background rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Commitment to Excellence</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Together, our leadership team brings over 65 years of combined experience in construction, engineering,
              and design. We are committed to maintaining the highest standards of quality, safety, and customer
              satisfaction in every project we undertake. Our diverse expertise allows us to tackle complex challenges
              and deliver innovative solutions that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
