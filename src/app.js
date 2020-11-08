import adjuntarManejador from "./adjuntarManejador";
import cargarTareas from "./cargarTareas";

/**
 * Iniciar app
 */
export default function iniciarApp() {
  adjuntarManejador();
  const tareas = cargarTareas();
  pintarTareas(tareas);
}
