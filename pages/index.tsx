import Link from "next/link"
import { fetchCourses } from "../lib/fetch-courses"

export default function Home({ courses }) {
  return (
    <div style={{ padding: 24 }}>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course}>
            <Link href={`/${course}`}>{course}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const coursesJson = await fetchCourses()

  return {
    props: {
      courses: Object.keys(coursesJson),
    },
  }
}