import Head from "next/head"
import Layout from "../../components/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { progressService } from "../../machines/progressService"

const mockCourses = {
  "testing-nextjs": {
    title: "Testing Next.js Applications with Cypress",
    description: "Learn how to test Next.js apps",
    lessons: ["intro", "selectors", "network"],
  },
  "advanced-cypress": {
    title: "Advanced Cypress",
    description: "Advanced Cypress techniques",
    lessons: ["commands", "stubbing", "ci"],
  },
}

export default function CoursePage() {
  const router = useRouter()
  const { course } = router.query

  const data = mockCourses[course as string]
  if (!data) return null

  return (
    <Layout courses={mockCourses} content={{}} progressService={progressService}>
      <Head>
        <title>{data.title}</title>
      </Head>

      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-600 mb-8">{data.description}</p>

        <ul className="space-y-3">
          {data.lessons.map((lesson) => (
            <li key={lesson}>
              <Link href={`/${course}/${lesson}`} className="text-blue-600 hover:underline">
                {lesson}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}