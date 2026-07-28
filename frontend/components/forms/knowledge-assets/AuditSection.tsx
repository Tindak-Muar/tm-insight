import SectionCard from "@/components/ui/SectionCard";
import Badge from "@/components/ui/Badge";

type AuditSectionProps = {
  createdBy?: string;
  createdAt?: string;
  updatedBy?: string;
  updatedAt?: string;
  status?: string;
  version?: string;
};

export default function AuditSection({
  createdBy,
  createdAt,
  updatedBy,
  updatedAt,
  status = "Draf",
  version = "1.0",
}: AuditSectionProps) {
  const Item = ({
    label,
    value,
  }: {
    label: string;
    value?: string;
  }) => (
    <div className="space-y-1">
      <p className="text-sm font-medium text-gray-600">
        {label}
      </p>

      <p className="text-sm text-gray-900">
        {value ?? "-"}
      </p>
    </div>
  );

  return (
    <SectionCard
      title="Audit"
      description="Maklumat audit dan sejarah aset."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        <Item
          label="Dicipta Oleh"
          value={createdBy}
        />

        <Item
          label="Tarikh Dicipta"
          value={createdAt}
        />

        <Item
          label="Dikemas Kini Oleh"
          value={updatedBy}
        />

        <Item
          label="Tarikh Dikemas Kini"
          value={updatedAt}
        />

        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-600">
            Status
          </p>

          <Badge variant="warning">
  {status}
</Badge>
        </div>

        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-600">
            Versi
          </p>

          <Badge>
  v{version}
</Badge>
        </div>

      </div>
    </SectionCard>
  );
}