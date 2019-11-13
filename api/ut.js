export default function ({ query = {} }, res) {
  const v = (query.vannhull || "Heim, Gullkorn, O'Learys")
    .replace(/\s/g, '')
    .split(',');

  res.json({
    dagens_vannhull: v[Math.floor(Math.random() * v.length)]
  })
}