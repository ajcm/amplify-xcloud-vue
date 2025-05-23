// debug-service.d.ts
declare module '../services/debug-service' {
  export function getBackendUrl(): string;
  export function getEcho(request: string): Promise<string>;
}
