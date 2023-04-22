/* eslint-disable import/no-anonymous-default-export */
export default {
    RECORD_TYPE: {
        USER: 'user',
        TRAINEE: 'trainee',
        BATCH: 'batch',
        PROJECT: 'project'
    },
    TOKEN_EXP: {
        ONE_HR: Math.floor(Date.now() / 1000) + (60 * 60)
    },
    TRAING_STATUS: {
        NOT_STARTED: 'NOT_STARTED',
        IN_PROGRESS: 'IN_PROGRESS',
        COMPLETED: 'COMPLETED',
        ON_HOLD: 'ON_HOLD'
    },
    TRAINING_STAGE: {
        BASIC: 'BASIC',
        ADVANCED: 'ADVANCED',
        PROJECT_SPECIFIC: 'PROJECT_SPECIFIC'
    }
}