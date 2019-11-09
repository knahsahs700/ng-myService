export class LoggingService {
  logServiceStatus(status: string) {
    console.log('A server status is changed, new status:' + status);
  }
}
