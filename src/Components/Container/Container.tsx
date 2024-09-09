import { useEffect, useState } from "react"
import { CardContent, ICardContent } from "../../Models/CardContent"
import './Container.css'
import { TagModel } from "../../Models/TagModel"
import { Components } from "../../Models/Components"


export default function Container() {
  const [todoTasks, setTodoTasks] = useState<ICardContent[]>([new CardContent(1, 'Fluxo de dispositivo', '', 10, 100, ['people'], [new TagModel('web', 'black')]), new CardContent(1, 'Fluxo de dispositivo', '', 10, 100, ['people'], [new TagModel('web', 'black')]), new CardContent(1, 'Fluxo de dispositivo', '', 10, 100, ['people'], [new TagModel('web', 'black')]), new CardContent(1, 'Fluxo de dispositivo', '', 10, 100, ['people'], [new TagModel('web', 'black')]), new CardContent(1, 'Fluxo de dispositivo', '', 10, 100, ['people'], [new TagModel('web', 'black')])])
  const [doingTasks, setDoingTasks] = useState<ICardContent[]>([])
  const [doneTasks, setDoneTasks] = useState<ICardContent[]>([])

  useEffect(() => {
    console.log('todoTasks', todoTasks)
  }, [todoTasks])

  return (
    <>
      <div className="body">
        <div className="div_todo box">
          <div className="div_header">
            <p>To do</p>
          </div>
          {todoTasks?.map((todoTasks) => <Components.Card cardContent={todoTasks} where={'1'}/>)}
        </div>
        <div className="div_doing box">
          <div className="div_header">
            <p>Doing</p>
          </div>
        </div>
        <div className="div_done box">
          <div className="div_header">
            <p>Done</p>
          </div>
        </div>
      </div>
    </>
  );
}