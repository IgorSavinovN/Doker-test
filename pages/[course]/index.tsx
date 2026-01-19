import Head from "next/head"
import Layout from "../../components/Layout"
import CourseHero from "../../components/Course/CourseHero"
import CourseContent from "../../components/Course/CourseContent"
import { progressService } from "../../machines/progressService"

export default function HomePage({ courses = {}, content = {} }) {
  // 🔒 Защита от prerender / undefined
  const courseKeys = Object.keys(content)

  if (courseKeys.length === 0) {
    return null
  }

  const firstCourse = courseKeys[0]
  const { title, lessons, description, learnFeatures, image } =
    content[firstCourse]

  return (
    <Layout content={content} courses={courses} progressService={progressService}>
      <Head>
        <title>{title} | Cypress Real World Testing</title>
        <meta name="description" content={description} />
      </Head>

      <CourseHero
        title={title}
        description={description}
        image={image}
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