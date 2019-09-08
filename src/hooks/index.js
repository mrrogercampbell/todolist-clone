import { useState, useEffect } from 'react'
import { firebase } from '../firebase'
import { collatedTasksExist } from '../helpers'
import moment from 'moment'

export const useTask = selectedProject => {
    const [task, setTasks] = useState([])

    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('task')
            .where('userId', '==', 'admin')

        unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ? (unsubscribe = unsubscribe.where('projectId', '==', 'selectedProject'))
            : selectedProject === 'TODAY'
                ? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYY')
                ))
                : selectedProject == 'INBOX' || selectedProject == 0
                    ? (unsubscribe = unsubscribe.where('date', '==', ''))
                    : unsubscribe
    }, [])
}