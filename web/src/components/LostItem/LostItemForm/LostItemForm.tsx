import type { EditLostItemById, UpdateLostItemInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormLostItem = NonNullable<EditLostItemById['lostItem']>

interface LostItemFormProps {
  lostItem?: EditLostItemById['lostItem']
  onSave: (data: UpdateLostItemInput, id?: FormLostItem['id']) => void
  error: RWGqlError
  loading: boolean
}

const LostItemForm = (props: LostItemFormProps) => {
  const onSubmit = (data: FormLostItem) => {
    props.onSave(data, props?.lostItem?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormLostItem> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.lostItem?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.lostItem?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="itemPhotoURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Item photo url
        </Label>

        <TextField
          name="itemPhotoURL"
          defaultValue={props.lostItem?.itemPhotoURL}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="itemPhotoURL" className="rw-field-error" />

        <Label
          name="location"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Location
        </Label>

        <TextField
          name="location"
          defaultValue={props.lostItem?.location}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="location" className="rw-field-error" />

        <Label
          name="locationPhotoURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Location photo url
        </Label>

        <TextField
          name="locationPhotoURL"
          defaultValue={props.lostItem?.locationPhotoURL}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="locationPhotoURL" className="rw-field-error" />

        <Label
          name="area"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Area
        </Label>

        <TextField
          name="area"
          defaultValue={props.lostItem?.area}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="area" className="rw-field-error" />

        <Label
          name="dateLastSeen"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date last seen
        </Label>

        <DatetimeLocalField
          name="dateLastSeen"
          defaultValue={formatDatetime(props.lostItem?.dateLastSeen)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="dateLastSeen" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default LostItemForm
