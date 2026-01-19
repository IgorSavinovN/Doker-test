import Head from "next/head"
import Layout from "../../components/Layout"
import CourseHero from "../../components/Course/CourseHero"
import CourseContent from "../../components/Course/CourseContent"
import { progressService } from "../../machines/progressService"

export default function HomePage({ courses, content }) {
  // Берём первый курс для отображения на главной
  const firstCourse = Object.keys(content)[0]
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

