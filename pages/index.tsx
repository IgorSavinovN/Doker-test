import { fetchCourses } from "../lib/fetch-courses"

export async function getServerSideProps() {
  const coursesJson = await fetchCourses()
  const firstCourse = Object.keys(coursesJson)[0]

  return {
    redirect: {
      destination: `/${firstCourse}`,
      permanent: false,
    },
  }
}

export default function Home() {
  return null
}