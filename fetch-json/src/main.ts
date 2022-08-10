import axios from 'axios'
import { URL } from './consts'

interface ToDo {
  id: number
  title: string
  completed: boolean
}

async function getTodoById (id) {
  try {
    const { data } = await axios.get(`${URL}/${id}`)

    return data
  } catch (error) {
    console.log(error)
  }
}

function printToDo (id: number, title: string, completed: boolean) {
  console.log(`
    ToDo with ID: ${id}
    Title: ${title}
    Complete status: ${completed}
  `)
}

async function main () {
  const data = await getTodoById(1)
  const { id, title, completed } = data as ToDo

  printToDo(id, title, completed)
}

main()
