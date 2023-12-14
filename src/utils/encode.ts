import { IForm } from "../components/Interface/Form/IForm";

function encode(data: IForm) {
    const formData = new FormData()
  
    for (const key of Object.keys(data)) {
      const value = data[key]
      if (value instanceof File) {
        formData.append(key, value)
      } else {
        formData.append(key, value as string);
      }
    }
    return formData
  }

  export default encode