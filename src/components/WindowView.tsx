import { IWindow } from '@/state/window'
import Window from './Window'

type Props = {
  projects: IWindow[]
}

const WindowView: React.FC<Props> = ({ projects }) => {
  return (
    <div>
      {projects.map(project => (
        <Window data={project} key={project.id} />
      ))}
    </div>
  )
}

export default WindowView
