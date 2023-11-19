type componentTagType = {
    
        key: string
        type: string
      
}

export type componentTagResponse = {
    data: {
        attributes: {
            tag: componentTagType
        }
      }
}