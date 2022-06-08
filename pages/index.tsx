import { useAtom } from 'jotai'
import type { NextPage } from 'next'
import Head from 'next/head'
import Window from '@/components/Window'
import { windowListAtom } from '@/lib/windowStore'
import { getProjectData } from '@/fixtures/projects'
import { IWindow } from '@/state/window'
import WindowView from '@/components/WindowView'

type Props = {
  projects: IWindow[]
}

const Home: NextPage<Props> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Cas de Rooij</title>
      </Head>

      <WindowView projects={projects} />
    </>
  )
}

export async function getStaticProps() {
  const projects = await getProjectData

  return {
    props: {
      projects
    }
  }
}

export default Home
