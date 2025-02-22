import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity.id).not.toBeNull()
    expect(uuidValidate(entity.id)).toBeTruthy()
  })

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const id = 'e5aa8c5f-82a2-4cc5-893a-374fe905fe9c'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity.id)).toBeTruthy()
    expect(entity.id).toBe(id)
  })

  it('Should convert an entity to a JS Object', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const id = 'e5aa8c5f-82a2-4cc5-893a-374fe905fe9c'
    const entity = new StubEntity(props, id)

    expect(entity.toJason()).toStrictEqual({
      id,
      ...props,
    })
  })
})
