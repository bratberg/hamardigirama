export default function (req, res) {
  res.send(['Heim', 'Gullkorn', 'Olearys'][Math.floor(Math.random() * 3)]);
}