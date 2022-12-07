import api from "../axios";

class Service {
  constructor(request) {
    this.request = request;
  }

  async SignUp(data) {
    return this.request.post(`/create_users`, data);
  }

  async GetTotalUserRecordings() {
    return this.request.get(`/total-recordings-user`);
  }

  async TotalAnalysis() {
    return this.request.get("/total-analysis");
  }

  async RecentRecordings() {
    return this.request.get("/recent-recordings?skip=0&limit=5");
  }

  async getAgentReport(id) {
    return this.request.get(`/AgentDetails?agent_id=${id}`);
  }

  async getAgentAnalysis(id) {
    return this.request.get(`/total-agent-analysis?agent_id=${id}`);
  }
}

const ApiService = new Service(api);

export default ApiService;
