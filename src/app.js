import adjuntarManejador from "./adjuntarManejador";
import cargarTareas from "./cargarTareas";
import pintarTareas from "./pintarTareas";

/**
 * Iniciar app
 */
export default function iniciarApp() {
  adjuntarManejador();
  const tareas = cargarTareas();
  pintarTareas(tareas);
}
