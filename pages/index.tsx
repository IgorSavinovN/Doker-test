import Head from "next/head"
import Layout from "../components/Layout"
import CourseHero from "../components/Course/CourseHero"
import CourseContent from "../components/Course/CourseContent"
import { progressService } from "../machines/progressService"
import { fetchCourses } from "../lib/fetch-courses"

export default function HomePage({ courses, content, firstCourse }) {
  const { title, lessons, description, learnFeatures } = content[firstCourse]

  return (
    <Layout content={content} courses={courses} progressService={progressService}>
      <Head>
        <title>{title} | Cypress Real World Testing</title>
        <meta name="description" content={description} />
      </Head>

      <CourseHero
        title={title}
        description={description}
        image={content[firstCourse].image}
      />

      <CourseContent
        title={title}
        lessons={lessons}
        learnFeatures={learnFeatures}
        progressService={progressService}
        course={firstCourse}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const coursesJson = await fetchCourses()
  const courses = Object.keys(coursesJson)
  const firstCourse = courses[0]

  return {
    props: {
      courses,
      content: coursesJson,
      firstCourse,
    },
  }
}