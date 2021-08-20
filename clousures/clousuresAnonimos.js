const llamar = (nombre) => {
  return () => console.log(`Ven para acá ${nombre}`)
}

llamar("anbreaker")()

// Util para definir comportamientos, ejemplo con Mongoose.
const auditProps = {
  createdAt: { default: new Date() },
  updatedAt: { default: new Date() },
  createdBy: { default: new Schema.Types.ObjectId(), ref: "User" },
  updatedBy: { default: new Schema.Types.ObjectId(), ref: "User" },
}

const Model = (defaultProps) => {
  return (name, props) => {
    const schema = moongose.schema({
      ...defaultProps,
      ...props,
    })

    return moongose.Model(name, schema)
  }
}

export const withAudit = Model(auditProps)

// ... en otro archivo

withAudit("Product", {
  name: String,
  desc: String,
})
