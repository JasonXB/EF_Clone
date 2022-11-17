import { FormItemProps } from '../interface/form-item-props.interface'

const FormItem = ({ itemString, children }: FormItemProps) => {
  return (
    <div>
        <h5 className="font-medium xs:text-2xl">{itemString}</h5>
        {children}
    </div>
  )
}

export default FormItem
