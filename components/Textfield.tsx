import type { FunctionComponent } from 'react'

type Props = {
    label?: string,
    placeholder?: string,
    name?: string,
    id?: string,
    value?: string,
    onChange?: (e: any) => void,
}

const Textfield: FunctionComponent<Props> = ({ label, placeholder, name, id, value, onChange }) => (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          type="text"
          name={name}
          id={id}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
)

export default Textfield