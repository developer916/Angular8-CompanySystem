export class ResourcesUnitReport {

  public static readonly SESSION_NAME = 'Session.OS.IM.ResourcesUnitReport';

  private id: string;
  private UnitReportStatus: string;
  private Unit: string;
  private ArrivalDateTime: string;
  private UnitReport: string;
  private AppletLinkUnitReport: string;
  private Status: string;
  private DefaultUnitReport: string;
  private Narrative: string;
  private ActionTaken1: string;
  private ActionTaken2: string;
  private ActionTaken3: string;
  private ActionTaken4: string;


  constructor(options: {
    id: string,
    UnitReportStatus?: string,
    Unit?: string,
    ArrivalDateTime?: string,
    UnitReport?: string,
    AppletLinkUnitReport?: string,
    Status?: string,
    DefaultUnitReport?: string,
    Narrative?: string,
    ActionTaken1?: string,
    ActionTaken2?: string,
    ActionTaken3?: string,
    ActionTaken4?: string
  }) {
    this.UnitReportStatus = options.UnitReportStatus;
    this.Unit = options.Unit;
    this.ArrivalDateTime = options.ArrivalDateTime;
    this.UnitReport = options.UnitReport;
    this.AppletLinkUnitReport = options.AppletLinkUnitReport;
    this.Status = options.Status;
    this.DefaultUnitReport = options.DefaultUnitReport;
    this.Narrative = options.Narrative;
    this.ActionTaken1 = options.ActionTaken1;
    this.ActionTaken2 = options.ActionTaken2;
    this.ActionTaken3 = options.ActionTaken3;
    this.ActionTaken4 = options.ActionTaken4;
  }
}
