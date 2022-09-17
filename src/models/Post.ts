export interface IPost {
  id: string;
  message: string;
  name: string;
  photoUrl?: any;
  description: string;
  timestamp: Timestamp;
}

export interface Timestamp {
  seconds: number;
  nanoseconds: number;
}
