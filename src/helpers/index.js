import { collatedTask } from '../constants'

export const collatedTaskExist = selectedProject =>
    collatedTaskExist.find(task => task.key === selectedProject)