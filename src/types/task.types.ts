export type TaskStatus = 'all' | 'active' | 'completed';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}