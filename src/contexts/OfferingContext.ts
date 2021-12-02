import React from 'react'

interface OfferingContextType {
    professor: string
    course: string
    specialization: string
    code: string
}

const OfferingContext = React.createContext<OfferingContextType | null>(null)

export default OfferingContext
