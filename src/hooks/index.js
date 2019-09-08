import { useState, useEffect } from 'react'
import { firebase } from '../firebase'
import { collatedTasksExist } from '../helpers'
import moment from 'moment'

export const useTask = selectedProject => {
    const [task, setTasks] = useState([])
    const [archivedTasks, setArchivedTasks] = useState([])

    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('task')
            .where('userId', '==', 'kduep28494329')

        unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ? (unsubscribe = unsubscribe.where('projectId', '==', 'selectedProject'))
            : selectedProject === 'TODAY'
                ? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYY')
                ))
                : selectedProject == 'INBOX' || selectedProject == 0
                    ? (unsubscribe = unsubscribe.where('date', '==', ''))
                    : unsubscribe
        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.doc.map(task => ({
                id: task.id,
                ...task.data(),
            }))
            setTasks(
                selectedProject === 'Next_7'
                    ? newTask.filter(
                        task => moment(task.date, 'DD-MM-YYY').diff(moment(), 'days') <= 7 &&
                            task.archived !== true
                    )
                    : newTasks.filter(task => task.archived !== true)
            )
            setArchivedTasks(newTasks.filter(task => task.archived != false))
        })
        return () => unsubscribe()
    }, [selectedProject])
    return { tasks, archivedTasks }
}

export const useProject = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        firebase.firestore.collection('projects').where('userId', '==', 'kduep28494329')
            .orderBy('projectId')
            .get()
            .then(snapshot => {
                const allProject = snapshot.docs.map(project => ({
                    ...project.data(),
                    docId: project.id,
                }))

                if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                    setProjects(allProjects)
                }
            })
    }, [projects])
    return { projects, setProjects }
}