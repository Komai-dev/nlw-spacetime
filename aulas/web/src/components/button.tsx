const styles = {
  color: '#f00',
}

interface ButtonProps {
  title: string
}

const nome = 'Maiko'

export function Button(props: ButtonProps) {
  return (
    <p style={styles}>
      {props.title}
    </p>
  )
}