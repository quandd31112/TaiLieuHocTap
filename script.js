// ---------- DANH SÁCH THUẬT NGỮ GAME DESIGNER ----------
const glossaryData = [
    {
        term: "Game Mechanics",
        definition: "Cơ chế trò chơi là tập hợp các quy tắc, hệ thống và tương tác cốt lõi xác định cách người chơi hành động và thế giới phản hồi. Bao gồm nhảy, chiến đấu, thu thập tài nguyên, hệ thống nhiệm vụ — nền tảng cho mọi trải nghiệm gameplay."
    },
    {
        term: "Level Design",
        definition: "Thiết kế màn chơi tập trung vào việc xây dựng không gian, bố cục, nhịp độ thử thách và dẫn dắt người chơi. Level Design ảnh hưởng trực tiếp đến cảm xúc, sự khám phá và tính tái chơi."
    },
    {
        term: "NPC (Non-Player Character)",
        definition: "Nhân vật không do người chơi điều khiển, được lập trình bởi AI để cung cấp cốt truyện, nhiệm vụ, đối thoại hoặc tạo thử thách. NPC làm sống động thế giới game và thúc đẩy mạch truyện."
    },
    {
        term: "Loot Box",
        definition: "Cơ chế kiếm tiền dưới dạng hộp phần thưởng ngẫu nhiên, chứa vật phẩm mỹ phẩm hoặc tăng sức mạnh. Gây tranh cãi vì tính may rủi, nhưng được nhiều game sử dụng để duy trì doanh thu."
    },
    {
        term: "RPG Elements",
        definition: "Yếu tố nhập vai như hệ thống chỉ số, cây kỹ năng, trang bị, cấp độ nhân vật và lựa chọn phân nhánh. Giúp người chơi phát triển nhân vật và gia tăng chiều sâu chiến thuật."
    },
    {
        term: "Sandbox",
        definition: "Thiết kế trao quyền tự do cao cho người chơi, ít ép buộc tuyến tính. Người chơi tự tạo mục tiêu, tự khám phá và tự sinh ra trải nghiệm của riêng mình."
    },
    {
        term: "Procedural Generation",
        definition: "Sinh nội dung bằng thuật toán thay vì làm tay hoàn toàn, ví dụ map, item, dungeon, nhiệm vụ. Giúp tăng tính tái chơi và giảm khối lượng sản xuất nội dung."
    },
    {
        term: "Player Agency",
        definition: "Mức độ mà lựa chọn của người chơi thực sự tạo ra tác động lên gameplay, thế giới hoặc kết cục. Agency cao làm người chơi thấy quyết định của họ có ý nghĩa."
    },
    {
        term: "Emergent Gameplay",
        definition: "Lối chơi phát sinh ngoài dự kiến từ sự kết hợp giữa nhiều cơ chế đơn giản. Đây thường là dấu hiệu của hệ thống mạnh và giàu chiều sâu."
    },
    {
        term: "Game Loop",
        definition: "Vòng lặp hành động lặp đi lặp lại trong game, ví dụ chiến đấu → nhận thưởng → nâng cấp → chiến đấu tiếp. Nếu loop yếu, game chết rất nhanh."
    },
    {
        term: "Balancing",
        definition: "Quá trình điều chỉnh chỉ số, phần thưởng, độ khó và tương tác hệ thống để tránh thứ gì đó quá mạnh hoặc quá phế. Balance không phải công bằng tuyệt đối, mà là hợp lý."
    },
    {
        term: "Diegetic UI",
        definition: "UI được tích hợp trực tiếp vào thế giới game thay vì nổi riêng trên màn hình, ví dụ thanh máu trên suit, bản đồ cầm tay. Nó giúp tăng nhập vai."
    },
    {
        term: "PvE / PvP",
        definition: "PvE là Player versus Environment, người chơi đấu với hệ thống hoặc AI. PvP là Player versus Player, người chơi đấu trực tiếp với nhau."
    },
    {
        term: "Ragdoll Physics",
        definition: "Mô phỏng cơ thể nhân vật bằng vật lý khi ngã, chết hoặc va chạm. Thường tạo cảm giác chân thực hoặc hài hước."
    },
    {
        term: "Metagame",
        definition: "Phần chiến thuật hoặc tối ưu nằm ngoài trận đấu trực tiếp, ví dụ build mạnh nhất, lựa chọn tướng theo meta, tối ưu đội hình, nghiên cứu patch."
    },

    // SYSTEM & MECHANICS
    {
        term: "Core Loop",
        definition: "Chuỗi hành động chính lặp đi lặp lại tạo nên trải nghiệm cốt lõi của game. Một core loop tốt phải dễ hiểu, có phần thưởng rõ ràng và đủ hấp dẫn để lặp lại."
    },
    {
        term: "Mechanics",
        definition: "Các hành động, quy tắc và cách tương tác cụ thể trong game như nhảy, bắn, né, đẩy block, chế đồ. Mechanics là đơn vị nhỏ nhất của gameplay."
    },
    {
        term: "System Design",
        definition: "Thiết kế cách nhiều mechanics liên kết với nhau thành một hệ thống lớn như chiến đấu, kinh tế, progression, social hoặc crafting. Designer giỏi là người hiểu tương tác giữa các hệ thống, không chỉ từng mechanic lẻ."
    },
    {
        term: "RNG (Random Number Generation)",
        definition: "Yếu tố ngẫu nhiên trong game như tỉ lệ crit, tỉ lệ rơi đồ, spawn vị trí hoặc kết quả gacha. RNG tạo bất ngờ nhưng lạm dụng sẽ gây ức chế."
    },
    {
        term: "Buff",
        definition: "Tăng sức mạnh cho nhân vật, vật phẩm, kỹ năng hoặc chiến thuật nhằm cải thiện tính cạnh tranh hoặc độ hữu dụng."
    },
    {
        term: "Nerf",
        definition: "Giảm sức mạnh của một yếu tố đang quá mạnh hoặc phá meta. Nerf đúng giúp game khỏe hơn, nerf ngu làm cộng đồng chửi."
    },
    {
        term: "Overpowered (OP)",
        definition: "Chỉ thứ gì đó mạnh vượt chuẩn cân bằng chung, khiến người chơi cảm thấy phải dùng nó mới tối ưu."
    },
    {
        term: "Underpowered (UP)",
        definition: "Chỉ thứ gì đó yếu hơn mặt bằng chung, ít được chọn vì không đủ hiệu quả hoặc không đáng đầu tư."
    },
    {
        term: "Win State",
        definition: "Điều kiện để người chơi chiến thắng trong một màn, một trận hoặc một vòng chơi."
    },
    {
        term: "Lose State / Fail State",
        definition: "Điều kiện thất bại của người chơi như hết máu, hết thời gian, bị phát hiện hoặc mất mục tiêu quan trọng."
    },
    {
        term: "Objective",
        definition: "Mục tiêu người chơi cần hoàn thành trong ngắn hạn hoặc dài hạn, ví dụ thoát map, giết boss, thu thập tài nguyên, sống sót qua đêm."
    },
    {
        term: "Progression",
        definition: "Quá trình người chơi trở nên mạnh hơn, mở khóa thêm nội dung hoặc tiến sâu hơn vào game qua thời gian."
    },
    {
        term: "Meta Progression",
        definition: "Tiến trình tồn tại ngoài từng run hoặc từng trận riêng lẻ, ví dụ mở vĩnh viễn kỹ năng mới, nhân vật mới, relic mới."
    },
    {
        term: "Power Curve",
        definition: "Đường tăng sức mạnh của người chơi hoặc kẻ địch theo thời gian. Power curve lệch sẽ làm game quá dễ hoặc quá bóp."
    },
    {
        term: "Difficulty Curve",
        definition: "Nhịp tăng độ khó theo tiến trình game. Tăng quá gắt thì người chơi bỏ, tăng quá chậm thì người chơi chán."
    },
    {
        term: "Skill Floor",
        definition: "Mức kỹ năng tối thiểu để bắt đầu chơi ổn một game hoặc một mechanic."
    },
    {
        term: "Skill Ceiling",
        definition: "Mức trần kỹ năng tối đa mà người chơi có thể thể hiện. Ceiling cao giúp game có chiều sâu lâu dài."
    },
    {
        term: "Risk vs Reward",
        definition: "Nguyên tắc thiết kế trong đó hành động càng nguy hiểm thì phần thưởng càng đáng. Nếu rủi ro cao mà thưởng thấp là thiết kế ngu."
    },
    {
        term: "Cooldown",
        definition: "Khoảng thời gian chờ trước khi kỹ năng hoặc hành động có thể được dùng lại."
    },
    {
        term: "Combo",
        definition: "Chuỗi hành động nối tiếp nhau để tạo hiệu quả mạnh hơn, mượt hơn hoặc đẹp hơn một hành động đơn lẻ."
    },
    {
        term: "Resource Management",
        definition: "Thiết kế và sử dụng các tài nguyên như mana, stamina, vàng, đạn, lượt đi hoặc thời gian để tạo quyết định chiến thuật."
    },
    {
        term: "Resource Sink",
        definition: "Nơi tài nguyên bị tiêu hao khỏi nền kinh tế game, ví dụ nâng cấp, sửa đồ, mua vé quay, craft."
    },
    {
        term: "Resource Faucet",
        definition: "Nguồn bơm tài nguyên vào game, ví dụ nhiệm vụ, thắng trận, login reward, farm quái."
    },

    // UX / UI / FEEL
    {
        term: "UI (User Interface)",
        definition: "Toàn bộ phần giao diện người dùng như nút bấm, icon, thanh máu, bản đồ nhỏ, inventory."
    },
    {
        term: "UX (User Experience)",
        definition: "Trải nghiệm tổng thể khi người chơi tương tác với game, bao gồm mức dễ hiểu, dễ dùng, mượt, rõ ràng và ít gây bực."
    },
    {
        term: "Onboarding",
        definition: "Quá trình đưa người chơi mới vào game sao cho họ hiểu phải làm gì, tại sao phải làm và có động lực ở lại."
    },
    {
        term: "FTUE (First Time User Experience)",
        definition: "Trải nghiệm đầu tiên của người chơi mới. Đây là đoạn cực quan trọng vì hỏng ở đây là mất người chơi từ đầu."
    },
    {
        term: "Game Feel",
        definition: "Cảm giác điều khiển và phản hồi khi chơi, ví dụ di chuyển sướng tay, đánh trúng đã, nhảy chắc, bắn có lực."
    },
    {
        term: "Juice",
        definition: "Lớp hiệu ứng phụ như rung màn hình, hit flash, âm thanh, tween, particles giúp hành động có cảm giác mạnh và sống hơn."
    },
    {
        term: "Feedback",
        definition: "Phản hồi mà game đưa ra để người chơi hiểu chuyện gì vừa xảy ra, ví dụ âm thanh trúng đòn, số damage, rung, đổi màu."
    },
    {
        term: "Telegraphing",
        definition: "Cách game báo trước một hành động quan trọng, đặc biệt là đòn đánh nguy hiểm, để người chơi có thời gian đọc và phản ứng."
    },
    {
        term: "Readability",
        definition: "Mức độ dễ đọc tình huống của game, bao gồm kẻ địch, đường đạn, mục tiêu, hazard, vật thể tương tác. Game khó không sao, game khó đọc mới là tệ."
    },
    {
        term: "Affordance",
        definition: "Khả năng để người chơi nhìn vào một vật hoặc UI là đoán được nó dùng để làm gì. Một cái nút nhìn phải ra cái nút."
    },
    {
        term: "Signposting",
        definition: "Cách dẫn hướng người chơi bằng ánh sáng, màu sắc, bố cục, chuyển động, landmark hoặc framing thay vì nhét chữ hướng dẫn ngu ngốc."
    },
    {
        term: "Accessibility",
        definition: "Thiết kế giúp nhiều nhóm người chơi hơn có thể tiếp cận game, ví dụ chỉnh màu, remap nút, subtitle, hỗ trợ input."
    },
    {
        term: "Cognitive Load",
        definition: "Mức độ áp lực xử lý thông tin mà game đặt lên đầu người chơi tại một thời điểm. Quá tải thì người chơi loạn."
    },

    // COMBAT / ACTION DESIGN
    {
        term: "Hitbox",
        definition: "Vùng va chạm dùng để xác định khi nào một đòn đánh hoặc vật thể gây trúng mục tiêu."
    },
    {
        term: "Hurtbox",
        definition: "Vùng nhận sát thương của nhân vật hoặc đối tượng. Hitbox chạm hurtbox thì tính là trúng."
    },
    {
        term: "I-Frames (Invincibility Frames)",
        definition: "Khoảng thời gian ngắn nhân vật không nhận sát thương, thường xuất hiện khi lăn né, dash hoặc bị knockdown."
    },
    {
        term: "Crowd Control (CC)",
        definition: "Hiệu ứng kiểm soát như stun, slow, root, silence, knock-up làm hạn chế khả năng hành động của mục tiêu."
    },
    {
        term: "Time to Kill (TTK)",
        definition: "Thời gian trung bình cần để hạ một mục tiêu. TTK ảnh hưởng rất mạnh đến nhịp combat."
    },
    {
        term: "Frame Data",
        definition: "Thông tin chi tiết về số frame của animation hoặc hành động như startup, active, recovery. Rất quan trọng trong game đối kháng."
    },
    {
        term: "Animation Cancel",
        definition: "Kỹ thuật cho phép cắt sớm animation để chuyển sang hành động khác, thường dùng để tăng chiều sâu combat."
    },

    // LEVEL / CONTENT
    {
        term: "Pacing",
        definition: "Nhịp độ luân phiên giữa căng thẳng, nghỉ ngơi, khám phá, chiến đấu, cutscene hoặc giải đố. Pacing tốt giữ người chơi không bị mệt hoặc chán."
    },
    {
        term: "Encounter Design",
        definition: "Thiết kế từng tình huống đối đầu cụ thể giữa người chơi và thử thách, bao gồm địch, địa hình, tài nguyên và không gian."
    },
    {
        term: "Checkpoint",
        definition: "Điểm lưu tiến trình tạm thời để người chơi hồi lại sau khi chết thay vì chơi lại quá xa."
    },
    {
        term: "Spawn Point",
        definition: "Vị trí mà người chơi, NPC, quái hoặc item xuất hiện trong game."
    },
    {
        term: "Greybox / Blockout",
        definition: "Bản dựng thô của màn chơi bằng hình khối đơn giản để test flow, combat, khoảng cách và bố cục trước khi lên art."
    },
    {
        term: "Traversal",
        definition: "Cách người chơi di chuyển xuyên qua không gian game như leo trèo, bám dây, dash, trượt, cưỡi thú, parkour."
    },
    {
        term: "Environmental Storytelling",
        definition: "Kể chuyện thông qua môi trường, đạo cụ, ánh sáng, xác chết, dấu vết, bố cục thay vì nhồi dialogue."
    },

    // ECONOMY / MONETIZATION / LIVE OPS
    {
        term: "Game Economy",
        definition: "Hệ thống tạo, lưu thông và tiêu hao tài nguyên trong game như vàng, gem, energy, item, material."
    },
    {
        term: "Soft Currency",
        definition: "Loại tiền dễ kiếm trong game qua quá trình chơi bình thường, ví dụ vàng, coin, credits."
    },
    {
        term: "Hard Currency",
        definition: "Loại tiền hiếm hoặc thường liên quan trực tiếp đến nạp tiền, ví dụ gems, crystals, premium tokens."
    },
    {
        term: "Monetization",
        definition: "Cách game tạo doanh thu, ví dụ premium box price, battle pass, IAP, cosmetic shop, ads."
    },
    {
        term: "IAP (In-App Purchase)",
        definition: "Mua hàng trong ứng dụng, thường là skin, tiền premium, pack ưu đãi, vé sự kiện hoặc battle pass."
    },
    {
        term: "Battle Pass",
        definition: "Hệ thống phần thưởng theo tiến trình mùa giải, người chơi hoàn thành nhiệm vụ để lên cấp và nhận quà."
    },
    {
        term: "Gacha",
        definition: "Cơ chế quay ngẫu nhiên để nhận nhân vật, vũ khí hoặc vật phẩm. Bản chất là RNG được gói lại thành monetization loop."
    },
    {
        term: "Pity System",
        definition: "Cơ chế đảm bảo sau một số lượt quay nhất định người chơi sẽ nhận được phần thưởng hiếm, nhằm giảm cảm giác quá đen."
    },
    {
        term: "Retention",
        definition: "Khả năng giữ người chơi quay lại game sau ngày 1, ngày 7, ngày 30. Game sống được hay không phụ thuộc rất mạnh vào retention."
    },
    {
        term: "Engagement",
        definition: "Mức độ người chơi tương tác sâu với game, ví dụ chơi lâu, quay lại thường xuyên, tham gia event, thử nhiều mode."
    },
    {
        term: "ARPDAU",
        definition: "Average Revenue Per Daily Active User, doanh thu trung bình trên mỗi người dùng hoạt động mỗi ngày."
    },
    {
        term: "DAU / MAU",
        definition: "DAU là số người dùng hoạt động hằng ngày, MAU là số người dùng hoạt động hằng tháng. Đây là chỉ số nền cho live game."
    },
    {
        term: "Live Ops",
        definition: "Vận hành game sau phát hành bằng event, update, banner, event shop, season, re-engagement campaign."
    },
    {
        term: "Sink vs Source Balance",
        definition: "Cân bằng giữa nơi phát tài nguyên và nơi tiêu tài nguyên. Lệch bên nào thì economy cũng nát."
    },

    // ANALYTICS / PRODUCT
    {
        term: "KPI (Key Performance Indicator)",
        definition: "Chỉ số cốt lõi dùng để đo hiệu quả thiết kế hoặc kinh doanh, ví dụ retention, conversion, session length."
    },
    {
        term: "Conversion Rate",
        definition: "Tỉ lệ người chơi thực hiện hành động mong muốn, ví dụ từ chơi miễn phí sang nạp tiền hoặc từ xem popup sang mua."
    },
    {
        term: "Funnel",
        definition: "Chuỗi bước người chơi đi qua trong một flow cụ thể, ví dụ tutorial → trận đầu → mở shop → mua gói đầu."
    },
    {
        term: "Churn",
        definition: "Hiện tượng người chơi rời bỏ game và không quay lại nữa."
    },
    {
        term: "A/B Testing",
        definition: "So sánh hai phiên bản thiết kế khác nhau trên nhóm người dùng khác nhau để xem phương án nào cho kết quả tốt hơn."
    },
    {
        term: "Session Length",
        definition: "Độ dài trung bình một lần chơi. Chỉ số này cần hợp với thể loại và mục tiêu sản phẩm."
    },

    // NARRATIVE / WORLD / PLAYER EXPERIENCE
    {
        term: "Narrative Design",
        definition: "Thiết kế cách câu chuyện được kể thông qua gameplay, hệ thống, level, dialogue, quest và bối cảnh."
    },
    {
        term: "Worldbuilding",
        definition: "Xây dựng bối cảnh, quy luật, lịch sử, văn hóa, phe phái và logic vận hành của thế giới game."
    },
    {
        term: "Fantasy",
        definition: "Lời hứa cảm xúc cốt lõi mà game cho người chơi sống trong đó, ví dụ làm sát thủ, chỉ huy quân đội, bartender đọc cảm xúc."
    },
    {
        term: "Immersion",
        definition: "Mức độ người chơi bị cuốn vào trải nghiệm và quên mất thế giới thật xung quanh."
    },
    {
        term: "Replayability",
        definition: "Khả năng khiến người chơi muốn chơi lại nhờ build khác, kết cục khác, RNG, challenge hoặc mastery."
    },
    {
        term: "Replay Loop",
        definition: "Động lực cụ thể khiến người chơi bắt đầu lại một run hoặc một trận mới ngay sau khi kết thúc."
    },

    // GENERAL DESIGN TERMS
    {
        term: "Prototype",
        definition: "Bản thử nhanh để kiểm tra ý tưởng cốt lõi trước khi đầu tư art, content hoặc code sạch. Prototype là để test sự thật, không phải để đẹp."
    },
    {
        term: "Vertical Slice",
        definition: "Một phần nhỏ nhưng chất lượng gần hoàn thiện của game, thể hiện rõ hướng hình ảnh, cảm giác chơi và giá trị sản phẩm."
    },
    {
        term: "Feature Creep",
        definition: "Việc dự án phình ra liên tục vì thêm tính năng không kiểm soát. Đây là cách nhanh nhất để tự giết game indie."
    },
    {
        term: "Scope",
        definition: "Phạm vi nội dung và công việc của dự án. Scope ngu thì team chết trước khi game xong."
    },
    {
        term: "MVP (Minimum Viable Product)",
        definition: "Phiên bản tối thiểu nhưng vẫn đủ chơi và đủ chứng minh giá trị cốt lõi của game."
    },
    {
        term: "Juxtaposition",
        definition: "Đặt hai yếu tố trái ngược cạnh nhau để tạo ấn tượng mạnh, ví dụ hình ảnh dễ thương nhưng gameplay tàn nhẫn."
    },
    {
        term: "Benchmark",
        definition: "Sản phẩm tham chiếu dùng để so sánh, học hỏi hoặc xác định tiêu chuẩn cho feature, UX, combat hoặc market positioning."
    },
    {
    term: "Session Length",
    definition: "Thời lượng trung bình của một phiên chơi. Chỉ số này giúp đánh giá mức độ cuốn của gameplay và nhịp chơi có hợp lý hay không."
},
{
    term: "Session Frequency",
    definition: "Tần suất người chơi quay lại game trong một khoảng thời gian nhất định, ví dụ mỗi ngày 2 lần hoặc mỗi tuần 4 lần."
},
{
    term: "Stickiness",
    definition: "Mức độ gắn bó của người chơi với game, thường được nhìn qua tỉ lệ DAU/MAU để xem người chơi có quay lại thường xuyên hay không."
},
{
    term: "Whale",
    definition: "Nhóm người chơi chi rất nhiều tiền trong game, thường đóng góp phần lớn doanh thu trong mô hình free-to-play."
},
{
    term: "Dolphin",
    definition: "Nhóm người chơi có chi tiêu ở mức trung bình, không quá ít nhưng cũng không phải nhóm nạp mạnh nhất."
},
{
    term: "Minnow",
    definition: "Nhóm người chơi chi rất ít tiền hoặc chỉ mua những gói nhỏ, giá rẻ trong game."
},
{
    term: "Conversion Funnel",
    definition: "Chuỗi bước người chơi đi qua trước khi hoàn thành một hành động quan trọng như đăng ký, vượt tutorial, hoặc nạp tiền."
},
{
    term: "Drop-off Point",
    definition: "Điểm trong trải nghiệm nơi nhiều người chơi rời bỏ game hoặc ngừng tiếp tục một flow cụ thể."
},
{
    term: "Day 1 Retention",
    definition: "Tỉ lệ người chơi quay lại game vào ngày hôm sau sau lần cài đặt hoặc chơi đầu tiên."
},
{
    term: "Day 7 Retention",
    definition: "Tỉ lệ người chơi quay lại game sau 7 ngày. Đây là chỉ số cho thấy game có giữ được hứng thú ban đầu hay không."
},
{
    term: "Day 30 Retention",
    definition: "Tỉ lệ người chơi còn quay lại game sau 30 ngày, thường phản ánh sức khỏe dài hạn của sản phẩm."
},
{
    term: "LTV (Lifetime Value)",
    definition: "Tổng giá trị doanh thu trung bình mà một người chơi tạo ra trong toàn bộ vòng đời họ gắn bó với game."
},
{
    term: "ARPPU",
    definition: "Average Revenue Per Paying User, doanh thu trung bình trên mỗi người chơi có trả tiền."
},
{
    term: "CPI (Cost Per Install)",
    definition: "Chi phí trung bình để có được một lượt cài đặt game thông qua quảng cáo hoặc chiến dịch marketing."
},
{
    term: "UA (User Acquisition)",
    definition: "Hoạt động thu hút người chơi mới đến với game thông qua quảng cáo, cộng đồng, cửa hàng ứng dụng hoặc chiến dịch truyền thông."
},
{
    term: "Segmentation",
    definition: "Phân nhóm người chơi dựa trên hành vi, mức chi tiêu, tiến trình hoặc mức độ hoạt động để tối ưu thiết kế và vận hành."
},
{
    term: "Churn Rate",
    definition: "Tỉ lệ người chơi rời bỏ game trong một giai đoạn nhất định. Churn cao là dấu hiệu sản phẩm có vấn đề."
},
{
    term: "Re-engagement",
    definition: "Hoạt động kéo người chơi cũ quay trở lại game thông qua event, quà tặng, thông báo hoặc nội dung mới."
},
{
    term: "FTUE Funnel",
    definition: "Chuỗi các bước người chơi đi qua trong trải nghiệm đầu tiên, dùng để đo họ bị rơi ở đâu trong tutorial hoặc onboarding."
},
{
    term: "Tutorialization",
    definition: "Quá trình biến việc hướng dẫn người chơi thành một phần tự nhiên của trải nghiệm thay vì nhồi chữ hoặc bắt đọc quá nhiều."
},
{
    term: "Teach-Test-Twist",
    definition: "Nguyên tắc thiết kế level hoặc mechanic: dạy người chơi cách hoạt động, kiểm tra khả năng áp dụng, rồi biến tấu để tăng độ khó."
},
{
    term: "Breadcrumbing",
    definition: "Cách dẫn dắt người chơi từng bước bằng tín hiệu nhỏ trong môi trường, phần thưởng hoặc bố cục thay vì chỉ đường quá lộ."
},
{
    term: "Flow State",
    definition: "Trạng thái người chơi tập trung cao độ và bị cuốn hoàn toàn vào trải nghiệm vì độ khó và kỹ năng đang cân bằng tốt."
},
{
    term: "Player Motivation",
    definition: "Lý do khiến người chơi tiếp tục chơi game, ví dụ muốn mạnh hơn, khám phá cốt truyện, cạnh tranh, sưu tầm hoặc thư giãn."
},
{
    term: "Intrinsic Motivation",
    definition: "Động lực đến từ chính niềm vui hoặc sự thỏa mãn của hoạt động chơi, không phụ thuộc hoàn toàn vào phần thưởng bên ngoài."
},
{
    term: "Extrinsic Motivation",
    definition: "Động lực đến từ phần thưởng bên ngoài như vàng, skin, rank, achievement hoặc quà đăng nhập."
},
{
    term: "Compulsion Loop",
    definition: "Vòng lặp khiến người chơi liên tục muốn quay lại thực hiện hành động để nhận thưởng và tiếp tục lặp lại."
},
{
    term: "Reward Schedule",
    definition: "Cách sắp xếp thời điểm và tần suất phần thưởng được trao cho người chơi để duy trì hứng thú và hành vi mong muốn."
},
{
    term: "Variable Reward",
    definition: "Phần thưởng biến thiên, không cố định mỗi lần nhận giống nhau, thường tạo cảm giác bất ngờ và gây nghiện mạnh hơn."
},
{
    term: "Daily Login Reward",
    definition: "Phần thưởng nhận được khi đăng nhập mỗi ngày nhằm tăng retention và tạo thói quen quay lại."
},
{
    term: "Quest Loop",
    definition: "Chuỗi nhận nhiệm vụ, thực hiện, hoàn thành và nhận thưởng, thường là một loop phụ hỗ trợ loop chính."
},
{
    term: "Mission Design",
    definition: "Thiết kế mục tiêu, điều kiện hoàn thành, nhịp độ và phần thưởng của từng nhiệm vụ trong game."
},
{
    term: "Side Quest",
    definition: "Nhiệm vụ phụ ngoài tuyến chính, thường dùng để mở rộng thế giới, cho thêm phần thưởng hoặc kể chuyện bổ sung."
},
{
    term: "Main Quest",
    definition: "Chuỗi nhiệm vụ chính dẫn dắt tiến trình cốt truyện hoặc tiến trình cốt lõi của game."
},
{
    term: "Quest Gating",
    definition: "Cách khóa hoặc mở nhiệm vụ dựa trên điều kiện như cấp độ, item, tiến trình cốt truyện hoặc nhiệm vụ trước đó."
},
{
    term: "Progression Gate",
    definition: "Rào cản buộc người chơi phải đạt điều kiện nhất định mới được đi tiếp, ví dụ cần level cao hơn hoặc hoàn thành một mục tiêu phụ."
},
{
    term: "Soft Gate",
    definition: "Rào cản mềm không chặn hoàn toàn nhưng khiến người chơi thấy nên quay lại sau, ví dụ khu vực quá khó so với hiện tại."
},
{
    term: "Hard Gate",
    definition: "Rào cản cứng chặn tuyệt đối tiến trình cho tới khi người chơi đạt điều kiện cần thiết."
},
{
    term: "Power Spike",
    definition: "Thời điểm sức mạnh của người chơi hoặc kẻ địch tăng vọt do mở khóa skill, item, combo hoặc mốc tiến trình."
},
{
    term: "Snowballing",
    definition: "Hiện tượng bên đang có lợi thế càng lúc càng mạnh hơn, khiến khoảng cách ngày càng khó lật ngược."
},
{
    term: "Catch-up Mechanic",
    definition: "Cơ chế giúp người chơi đang thua có cơ hội bắt kịp, nhằm giữ trận đấu hoặc trải nghiệm không bị một chiều."
},
{
    term: "Rubber Banding",
    definition: "Cơ chế tự động kéo khoảng cách giữa người dẫn trước và người phía sau lại gần nhau, thường thấy trong game đua xe."
},
{
    term: "Dominant Strategy",
    definition: "Chiến thuật quá hiệu quả so với các lựa chọn khác, làm giảm sự đa dạng quyết định của người chơi."
},
{
    term: "Build Diversity",
    definition: "Mức độ mà game cho phép nhiều cách xây dựng nhân vật hoặc chiến thuật khác nhau mà vẫn hiệu quả."
},
{
    term: "Synergy",
    definition: "Sự kết hợp giữa nhiều yếu tố tạo ra hiệu quả mạnh hơn tổng từng phần riêng lẻ."
},
{
    term: "Counterplay",
    definition: "Khả năng mà game cho phép người chơi phản ứng, né tránh, khắc chế hoặc trừng phạt một chiến thuật mạnh."
},
{
    term: "Decision Space",
    definition: "Không gian lựa chọn có ý nghĩa mà người chơi có trong một tình huống hoặc xuyên suốt game."
},
{
    term: "Meaningful Choice",
    definition: "Lựa chọn có hậu quả, có đánh đổi, và tạo khác biệt thực sự thay vì chỉ là ảo giác lựa chọn."
},
{
    term: "Trade-off",
    definition: "Đánh đổi giữa hai hoặc nhiều lợi ích, buộc người chơi không thể có tất cả cùng lúc."
},
{
    term: "Verb Set",
    definition: "Tập hợp các hành động cơ bản mà người chơi có thể làm trong game như chạy, nhảy, bắn, né, nói chuyện, craft."
},
{
    term: "Game Pillars",
    definition: "Các trụ cột thiết kế cốt lõi định hướng toàn bộ dự án, dùng để kiểm tra xem feature có đúng hướng hay không."
},
{
    term: "Design Intent",
    definition: "Ý đồ thiết kế thực sự đằng sau một mechanic, system hoặc feature. Không rõ intent thì rất dễ làm feature vô hồn."
},
{
    term: "Player Fantasy",
    definition: "Cảm giác vai trò hoặc quyền lực mà người chơi được sống trong game, ví dụ làm thợ săn, phù thủy, chỉ huy hoặc kẻ sống sót."
},
{
    term: "State Machine",
    definition: "Mô hình chia hành vi hoặc flow thành các trạng thái rõ ràng và quy tắc chuyển đổi giữa chúng."
},
{
    term: "Combat Loop",
    definition: "Chuỗi hành động lặp trong giao tranh như tiếp cận, né, tấn công, hồi phục, tận dụng sơ hở, kết liễu."
},
{
    term: "Exploration Loop",
    definition: "Vòng lặp khám phá gồm tìm đường, phát hiện bí mật, thu thập, mở khóa và tiếp tục đi sâu hơn."
},
{
    term: "Social Loop",
    definition: "Vòng lặp dựa trên tương tác xã hội như kết bạn, gửi quà, guild, co-op, cạnh tranh bảng xếp hạng."
},
{
    term: "Economy Sink",
    definition: "Một dạng tiêu hao tài nguyên nhằm ngăn lạm phát và giữ nền kinh tế game ổn định về lâu dài."
},
{
    term: "Economy Inflation",
    definition: "Tình trạng tài nguyên trong game bị bơm ra quá nhiều khiến phần thưởng mất giá trị và progression trở nên nhạt."
},
{
    term: "Crafting System",
    definition: "Hệ thống cho phép người chơi kết hợp nguyên liệu để tạo ra vật phẩm, trang bị hoặc nâng cấp."
},
{
    term: "Loadout",
    definition: "Bộ trang bị, kỹ năng hoặc item mà người chơi mang vào trước một trận hoặc nhiệm vụ."
},
{
    term: "Inventory Management",
    definition: "Thiết kế việc chứa, sắp xếp, giới hạn và sử dụng vật phẩm trong túi đồ của người chơi."
},
{
    term: "Encumbrance",
    definition: "Cơ chế giới hạn trọng lượng hoặc số lượng đồ mang theo, buộc người chơi phải lựa chọn."
},
{
    term: "Loot Table",
    definition: "Bảng xác suất xác định vật phẩm nào có thể rơi ra từ quái, rương hoặc reward source."
},
{
    term: "Drop Rate",
    definition: "Tỉ lệ rơi của một vật phẩm cụ thể trong loot table."
},
{
    term: "Spawn Rate",
    definition: "Tần suất hoặc xác suất mà một đối tượng, quái hoặc tài nguyên xuất hiện trong game."
},
{
    term: "Aggro",
    definition: "Mức độ ưu tiên mà AI dành cho một mục tiêu, thường quyết định quái sẽ đuổi hoặc tấn công ai."
},
{
    term: "Boss Pattern",
    definition: "Chuỗi hành vi và đòn đánh lặp lại hoặc biến đổi của boss mà người chơi cần học để đối phó."
},
{
    term: "Phases",
    definition: "Các giai đoạn khác nhau trong một trận boss hoặc encounter, thường thay đổi hành vi, tốc độ hoặc bộ kỹ năng."
},
{
    term: "Mobility",
    definition: "Khả năng di chuyển linh hoạt của nhân vật như dash, double jump, blink, wall run hoặc grapple."
},
{
    term: "Kiting",
    definition: "Chiến thuật vừa giữ khoảng cách vừa gây sát thương để tránh bị áp sát hoặc phản công."
},
{
    term: "Burst Damage",
    definition: "Lượng sát thương dồn trong thời gian rất ngắn, thường dùng để kết liễu hoặc tạo đột biến."
},
{
    term: "Sustained Damage",
    definition: "Lượng sát thương duy trì ổn định theo thời gian dài thay vì bùng nổ trong chốc lát."
},
{
    term: "Glass Cannon",
    definition: "Kiểu build hoặc nhân vật gây sát thương rất cao nhưng rất mỏng và dễ chết."
},
{
    term: "Tank",
    definition: "Kiểu nhân vật có khả năng chịu đòn cao, thường dùng để hút sát thương hoặc che chắn cho đội."
},
{
    term: "Support",
    definition: "Vai trò tập trung vào hồi máu, buff, debuff hoặc tạo lợi thế chiến thuật cho đồng đội."
},
{
    term: "DPS",
    definition: "Damage Per Second, thường dùng để chỉ vai trò gây sát thương chính hoặc tốc độ gây sát thương của một build."
},
{
    term: "Aggro Radius",
    definition: "Phạm vi mà khi người chơi bước vào, AI sẽ phát hiện và bắt đầu phản ứng."
},
{
    term: "Line of Sight",
    definition: "Tầm nhìn trực tiếp giữa AI và mục tiêu, thường quyết định việc phát hiện, bắn hoặc đuổi theo."
},
{
    term: "Stealth System",
    definition: "Hệ thống cho phép người chơi ẩn nấp, né phát hiện và xử lý tình huống bằng lối chơi kín đáo."
},
{
    term: "Detection Meter",
    definition: "Thanh hoặc mức độ hiển thị việc kẻ địch đang nghi ngờ hay phát hiện người chơi đến đâu."
},
{
    term: "Safe Zone",
    definition: "Khu vực an toàn nơi người chơi không bị tấn công, thường dùng để nghỉ, mua đồ, nhận quest hoặc chuẩn bị."
},
{
    term: "Hub Area",
    definition: "Khu trung tâm kết nối nhiều hoạt động như chọn nhiệm vụ, nâng cấp, gặp NPC và đi sang các khu vực khác."
},
{
    term: "Traversal Challenge",
    definition: "Thử thách tập trung vào di chuyển chính xác, đọc địa hình và dùng công cụ mobility thay vì combat."
},
{
    term: "Set Piece",
    definition: "Phân đoạn được dàn dựng mạnh về hình ảnh và cảm xúc, thường rất đáng nhớ như rượt đuổi, sập cầu, boss intro."
},
{
    term: "Environmental Hazard",
    definition: "Mối nguy từ môi trường như lava, spike, bẫy điện, nền sập hoặc khí độc."
},
{
    term: "Puzzle Dependency",
    definition: "Mối liên kết giữa các thành phần puzzle khiến người chơi phải hiểu tương quan trước khi giải được toàn bộ."
},
{
    term: "Fail Forward",
    definition: "Thiết kế cho phép người chơi vẫn tiếp tục tiến trình dù thất bại, chỉ khác ở hậu quả hoặc phần thưởng thấp hơn."
},
{
    term: "Permadeath",
    definition: "Cơ chế chết là mất toàn bộ run hoặc tiến trình hiện tại, thường dùng để tăng tension trong roguelike."
},
{
    term: "Checkpoint Density",
    definition: "Mức độ dày hay thưa của checkpoint trong một khu vực, ảnh hưởng trực tiếp đến tension và frustration."
},
{
    term: "Save Scumming",
    definition: "Hành vi liên tục save/load để tránh hậu quả xấu hoặc tối ưu kết quả theo cách không đúng ý đồ thiết kế."
},
{
    term: "Telegraph Window",
    definition: "Khoảng thời gian từ lúc game báo hiệu đến lúc hành động nguy hiểm thực sự xảy ra."
},
{
    term: "Recovery Window",
    definition: "Khoảng hở sau một hành động, thường là lúc mục tiêu dễ bị trừng phạt hoặc lúc người chơi lấy lại kiểm soát."
},
{
    term: "Commitment",
    definition: "Mức độ mà khi đã thực hiện một hành động thì người chơi bị khóa vào đó và không dễ hủy ngang."
},
{
    term: "Responsiveness",
    definition: "Mức độ nhanh và chính xác mà game phản ứng lại input của người chơi. Thiếu cái này thì game feel chết."
},
{
    term: "Input Buffer",
    definition: "Cơ chế lưu input trong một khoảng thời gian ngắn để hành động tiếp theo vẫn được thực hiện mượt mà."
},
{
    term: "Hit Stop",
    definition: "Khoảng dừng cực ngắn khi đòn đánh trúng mục tiêu nhằm làm tăng cảm giác lực và độ đã tay."
},
{
    term: "Screen Shake",
    definition: "Hiệu ứng rung màn hình dùng để nhấn mạnh va chạm, nổ, hit mạnh hoặc sự kiện lớn."
},
{
    term: "Anticipation",
    definition: "Chuyển động chuẩn bị trước khi hành động chính diễn ra, giúp animation rõ, có lực và dễ đọc hơn."
},
{
    term: "Follow-through",
    definition: "Chuyển động quán tính sau hành động chính, giúp animation bớt cứng và có cảm giác tự nhiên hơn."
},
{
    term: "Silhouette",
    definition: "Hình khối tổng thể của nhân vật hoặc vật thể khi nhìn thành bóng đen, rất quan trọng cho readability."
},
{
    term: "Landmark",
    definition: "Điểm mốc thị giác nổi bật trong môi trường giúp người chơi định hướng và ghi nhớ không gian."
},
{
    term: "Negative Space",
    definition: "Khoảng trống có chủ ý trong bố cục giúp nhấn mạnh đối tượng chính và giảm rối mắt."
},
{
    term: "Visual Hierarchy",
    definition: "Thứ tự ưu tiên thị giác giúp người chơi biết nên nhìn gì trước, gì sau trong UI hoặc môi trường."
},
{
    term: "Diegesis",
    definition: "Mức độ một yếu tố thuộc về thế giới trong game hay nằm ngoài trải nghiệm của nhân vật."
},
{
    term: "Ludonarrative Dissonance",
    definition: "Sự lệch nhau giữa câu chuyện game nói và gameplay game cho phép làm, khiến trải nghiệm bị mâu thuẫn."
},
{
    term: "Branching Narrative",
    definition: "Cấu trúc kể chuyện có nhiều nhánh dựa trên lựa chọn hoặc hành động của người chơi."
},
{
    term: "Narrative Beat",
    definition: "Một nhịp nhỏ trong tiến trình kể chuyện, thường là khoảnh khắc thông tin, cảm xúc hoặc xung đột được đẩy lên."
},
{
    term: "Dialogue Tree",
    definition: "Cấu trúc hội thoại cho phép người chơi chọn nhiều câu trả lời khác nhau dẫn đến phản ứng khác nhau."
},
{
    term: "Bark",
    definition: "Câu thoại ngắn, thường lặp lại theo ngữ cảnh, được NPC hoặc nhân vật nói ra trong gameplay."
},
{
    term: "Lore",
    definition: "Hệ thống kiến thức nền, lịch sử, truyền thuyết và thông tin sâu về thế giới game."
},
{
    term: "Codex",
    definition: "Kho lưu trữ thông tin trong game về nhân vật, địa danh, sinh vật, sự kiện hoặc lore."
},
{
    term: "Faction",
    definition: "Nhóm, phe hoặc tổ chức trong thế giới game có mục tiêu, bản sắc và quan hệ riêng."
},
{
    term: "Archetype",
    definition: "Kiểu mẫu vai trò hoặc tính cách quen thuộc dùng để xây dựng nhân vật, class hoặc đối tượng gameplay."
},
{
    term: "Asymmetrical Design",
    definition: "Thiết kế mà các bên chơi có luật, công cụ hoặc mục tiêu khác nhau thay vì hoàn toàn giống nhau."
},
{
    term: "Symmetrical Design",
    definition: "Thiết kế mà các bên bắt đầu với điều kiện và khả năng tương đương nhau để nhấn mạnh kỹ năng thực thi."
},
{
    term: "Matchmaking",
    definition: "Hệ thống ghép người chơi với nhau trong multiplayer dựa trên kỹ năng, rank, ping hoặc tiêu chí khác."
},
{
    term: "MMR (Matchmaking Rating)",
    definition: "Chỉ số ẩn hoặc hiện dùng để ước tính trình độ người chơi và ghép trận phù hợp."
},
{
    term: "Elo System",
    definition: "Hệ thống tính điểm xếp hạng dựa trên thắng thua trước đối thủ có trình độ khác nhau."
},
{
    term: "Griefing",
    definition: "Hành vi cố tình phá trải nghiệm của người khác trong multiplayer như troll, feed hoặc cản đồng đội."
},
{
    term: "Toxicity",
    definition: "Hành vi giao tiếp hoặc ứng xử tiêu cực làm hại môi trường cộng đồng trong game."
},
{
    term: "Guild System",
    definition: "Hệ thống bang hội cho phép người chơi tạo nhóm lâu dài, giao tiếp, hỗ trợ và cùng tham gia nội dung."
},
{
    term: "Leaderboard",
    definition: "Bảng xếp hạng người chơi theo điểm, thời gian, rank hoặc thành tích."
},
{
    term: "Seasonality",
    definition: "Chu kỳ nội dung theo mùa giải hoặc đợt sự kiện nhằm làm mới trải nghiệm và kéo người chơi quay lại."
},
{
    term: "Limited-Time Event",
    definition: "Sự kiện chỉ tồn tại trong thời gian ngắn để tạo cảm giác khẩn trương và tăng engagement."
},
{
    term: "FOMO",
    definition: "Fear of Missing Out, tâm lý sợ bỏ lỡ phần thưởng hoặc cơ hội giới hạn thời gian."
},
{
    term: "Event Cadence",
    definition: "Nhịp độ và tần suất ra event trong live ops. Dày quá thì người chơi mệt, thưa quá thì game chết không khí."
},
{
    term: "Content Cadence",
    definition: "Tốc độ phát hành nội dung mới như màn chơi, nhân vật, chế độ hoặc season."
},
{
    term: "Roadmap",
    definition: "Kế hoạch định hướng các mốc nội dung, tính năng hoặc cập nhật trong tương lai của dự án."
},
{
    term: "Patch Notes",
    definition: "Danh sách thay đổi của một bản cập nhật, thường bao gồm fix lỗi, chỉnh balance và nội dung mới."
},
{
    term: "Meta Shift",
    definition: "Sự thay đổi trong chiến thuật tối ưu của cộng đồng sau patch, balance change hoặc nội dung mới."
},
{
    term: "Power Creep",
    definition: "Hiện tượng nội dung mới ngày càng mạnh hơn nội dung cũ, làm mất giá trị của những gì đã có trước đó."
},
{
    term: "Feature Parity",
    definition: "Trạng thái các nền tảng hoặc phiên bản có mức độ tính năng tương đương nhau."
},
{
    term: "Platform Holder",
    definition: "Đơn vị sở hữu nền tảng phát hành như Steam, PlayStation, Xbox, Nintendo, Apple hoặc Google."
},
{
    term: "Certification",
    definition: "Quy trình kiểm duyệt kỹ thuật hoặc tiêu chuẩn cần vượt qua để game được phát hành trên một nền tảng."
},
{
    term: "Submission Build",
    definition: "Bản build được chuẩn bị để gửi cho nhà phát hành, cửa hàng hoặc nền tảng kiểm duyệt."
},
{
    term: "Vertical Progression",
    definition: "Tiến trình kiểu tăng sức mạnh trực tiếp như level cao hơn, gear mạnh hơn, stat lớn hơn."
},
{
    term: "Horizontal Progression",
    definition: "Tiến trình kiểu mở thêm lựa chọn mới mà không nhất thiết mạnh hơn tuyệt đối, ví dụ weapon style hoặc playstyle mới."
},
{
    term: "Mastery",
    definition: "Quá trình người chơi dần hiểu sâu và thực thi ngày càng tốt một hệ thống hoặc kỹ năng."
},
{
    term: "Skill Expression",
    definition: "Mức độ mà game cho phép người chơi thể hiện trình độ qua quyết định, timing, execution và sáng tạo."
},
{
    term: "Ceiling Breaker",
    definition: "Một yếu tố mở ra tầng kỹ năng cao hơn rõ rệt, thường xuất hiện khi người chơi học được tech hoặc combo nâng cao."
},
{
    term: "Replay Value",
    definition: "Giá trị khiến game đáng được chơi lại nhiều lần, thường đến từ lựa chọn khác nhau, random, challenge hoặc content ẩn."
},
{
    term: "Completionism",
    definition: "Xu hướng người chơi muốn hoàn thành 100% nội dung, achievement, collectable hoặc secret."
},
{
    term: "Collectathon",
    definition: "Phong cách thiết kế đặt trọng tâm vào thu thập nhiều vật phẩm, token hoặc objective rải khắp màn chơi."
},
{
    term: "Microdecision",
    definition: "Quyết định nhỏ nhưng lặp liên tục trong gameplay, ví dụ né hướng nào, dùng skill nào trước, giữ item hay xài."
},
{
    term: "Macrodecision",
    definition: "Quyết định lớn ảnh hưởng dài hạn như build nào, route nào, đầu tư tài nguyên vào đâu."
},
{
    term: "Playtest",
    definition: "Quá trình cho người khác chơi thử để quan sát hành vi thật thay vì chỉ nghe họ nói."
},
{
    term: "Usability Testing",
    definition: "Kiểm tra mức độ dễ hiểu và dễ dùng của UI, flow hoặc hệ thống bằng người dùng thật."
},
{
    term: "Telemetry",
    definition: "Dữ liệu hành vi được game ghi lại để phân tích cách người chơi thực sự chơi, rơi ở đâu, kẹt ở đâu."
},
{
    term: "Heatmap",
    definition: "Bản đồ dữ liệu trực quan cho thấy nơi người chơi chết nhiều, đi nhiều, click nhiều hoặc tương tác nhiều."
},
{
    term: "Instrumentation",
    definition: "Quá trình cài các điểm đo dữ liệu vào game để theo dõi hành vi người chơi một cách có cấu trúc."
},
{
    term: "Hypothesis",
    definition: "Giả thuyết thiết kế cần được kiểm chứng bằng playtest hoặc dữ liệu thay vì cảm tính."
},
{
    term: "Tuning",
    definition: "Quá trình chỉnh các con số và tham số nhỏ để cải thiện trải nghiệm mà không đổi bản chất hệ thống."
},
{
    term: "Parameter",
    definition: "Biến số dùng để điều chỉnh hành vi của mechanic hoặc system như tốc độ, damage, cooldown, spawn rate."
},
{
    term: "Data-Driven Design",
    definition: "Cách xây dựng hệ thống sao cho nội dung và tham số được điều khiển bằng data thay vì hard-code quá nhiều."
},
{
    term: "Content Pipeline",
    definition: "Quy trình tạo, kiểm duyệt, tích hợp và cập nhật nội dung vào game một cách ổn định."
},
{
    term: "Scalability",
    definition: "Khả năng một hệ thống hoặc pipeline mở rộng lên nhiều nội dung hơn mà không vỡ cấu trúc."
},
{
    term: "Modularity",
    definition: "Mức độ một hệ thống được chia thành phần nhỏ, dễ tái sử dụng, dễ thay và dễ mở rộng."
},
{
    term: "Reusability",
    definition: "Khả năng một mechanic, asset hoặc system được tái dùng ở nhiều ngữ cảnh khác nhau."
},
{
    term: "Design Debt",
    definition: "Hệ quả tích tụ từ các quyết định thiết kế tạm bợ hoặc thiếu nhất quán, khiến sau này sửa rất đau."
},
{
    term: "Content Bloat",
    definition: "Tình trạng game có quá nhiều nội dung nhưng thiếu chất lượng, thiếu rõ ràng hoặc làm người chơi ngợp."
},
{
    term: "Clarity",
    definition: "Mức độ rõ ràng của thông tin, luật chơi, mục tiêu và phản hồi mà game truyền cho người chơi."
},
{
    term: "Frustration Point",
    definition: "Điểm trong trải nghiệm gây bực quá mức khiến người chơi muốn bỏ cuộc thay vì muốn cố thêm."
},
{
    term: "Delight",
    definition: "Khoảnh khắc tạo niềm vui vượt mong đợi cho người chơi, thường đến từ polish, bất ngờ hoặc phản hồi tinh tế."
},
{
    term: "Magic Circle",
    definition: "Không gian tâm lý nơi người chơi chấp nhận luật lệ và ý nghĩa riêng của trò chơi trong lúc đang chơi."
},
{
    term: "Ludic Goal",
    definition: "Mục tiêu thuần gameplay mà người chơi theo đuổi trong hệ thống luật chơi."
},
{
    term: "Aesthetic Experience",
    definition: "Trải nghiệm cảm xúc mà game tạo ra thông qua hình ảnh, âm thanh, nhịp độ, tương tác và bối cảnh."
},
{
    term: "Verb Economy",
    definition: "Mức độ tinh gọn và hiệu quả của tập hành động người chơi có thể làm. Nhiều verb chưa chắc tốt, quan trọng là có giá trị."
},
{
    term: "Systemic Design",
    definition: "Thiết kế dựa trên các luật và tương tác hệ thống để nội dung tự sinh chiều sâu thay vì phụ thuộc script cứng."
},
{
    term: "Authored Content",
    definition: "Nội dung được thiết kế thủ công với mục tiêu cảm xúc, pacing hoặc câu chuyện rất cụ thể."
},
{
    term: "Replayable Content",
    definition: "Nội dung được làm ra để chơi đi chơi lại mà vẫn còn giá trị, thường nhờ random, mastery hoặc biến số hệ thống."
},
{
    term: "Fail State Clarity",
    definition: "Mức độ rõ ràng để người chơi hiểu vì sao mình thua và cần làm gì khác ở lần sau."
},
{
    term: "Win Feedback",
    definition: "Cách game ăn mừng chiến thắng để người chơi cảm thấy công sức của họ được đền đáp xứng đáng."
},
{
    term: "Loss Aversion",
    definition: "Xu hướng người chơi sợ mất thứ đang có hơn là thích nhận thêm thứ mới, thường ảnh hưởng mạnh tới economy và tension."
},
{
    term: "Endgame",
    definition: "Phần nội dung dành cho người chơi sau khi đã hoàn thành tiến trình chính, thường tập trung vào mastery, optimization hoặc challenge cao."
},
{
    term: "Prestige System",
    definition: "Cơ chế reset một phần tiến trình để đổi lấy lợi ích lâu dài, danh hiệu hoặc trạng thái cao hơn."
},
{
    term: "New Game Plus",
    definition: "Chế độ chơi lại sau khi hoàn thành game, thường giữ lại một phần tiến trình nhưng tăng thử thách hoặc mở thêm nội dung."
},
{
    term: "Achievement Design",
    definition: "Thiết kế thành tựu sao cho vừa khuyến khích khám phá, mastery, replay vừa không biến thành checklist vô nghĩa."
},
{
    term: "Completion Reward",
    definition: "Phần thưởng cho việc hoàn thành một mục tiêu lớn như full map, full collection, hết campaign hoặc toàn bộ challenge."
},
{
    term: "Core Fantasy",
    definition: "Lời hứa trải nghiệm cốt lõi mà game bán cho người chơi ở tầng cảm xúc và vai trò, ví dụ cảm giác làm sát thủ, sinh tồn tuyệt vọng, hoặc thống trị chiến trường. Nếu mechanic không phục vụ fantasy này thì đó là rác."
},
{
    term: "Pillars",
    definition: "Các trụ cột thiết kế bất khả xâm phạm dùng để kiểm tra mọi feature, content và quyết định sản phẩm. Pillars tốt giúp team biết nên làm gì và quan trọng hơn là bỏ gì."
},
{
    term: "North Star",
    definition: "Mục tiêu trải nghiệm tối thượng mà toàn bộ game phải hướng tới. Nó không phải slogan đẹp, mà là tiêu chuẩn sống còn để ra quyết định."
},
{
    term: "Experience Goal",
    definition: "Trạng thái cảm xúc hoặc hành vi cụ thể mà designer muốn người chơi trải qua ở một đoạn, một mode hoặc toàn bộ game."
},
{
    term: "Design Constraints",
    definition: "Các giới hạn có chủ đích về thời gian, input, camera, content, scope hoặc công nghệ để buộc thiết kế tập trung và sắc hơn."
},
{
    term: "Possibility Space",
    definition: "Tổng không gian hành động, hệ quả và trạng thái mà game cho phép tồn tại. Game càng sâu thì possibility space càng giàu nhưng vẫn phải đọc được."
},
{
    term: "State Space",
    definition: "Tập hợp tất cả trạng thái có thể có của hệ thống trong game, bao gồm người chơi, AI, tài nguyên, môi trường và điều kiện thắng thua."
},
{
    term: "Decision Density",
    definition: "Mật độ các quyết định có ý nghĩa trên mỗi đơn vị thời gian. Cao quá thì loạn, thấp quá thì nhạt."
},
{
    term: "Decision Latency",
    definition: "Khoảng thời gian từ lúc người chơi nhận thông tin đến lúc phải ra quyết định. Latency ngắn tạo áp lực, latency dài tạo chiến thuật."
},
{
    term: "Execution Burden",
    definition: "Mức độ khó trong việc biến một quyết định đúng thành hành động thành công. Chiến thuật hay mà execution quá nặng có thể giết trải nghiệm."
},
{
    term: "Cognitive Bandwidth",
    definition: "Lượng chú ý và xử lý thông tin mà người chơi còn dư để tiếp nhận hệ thống mới, đọc combat hoặc lên kế hoạch."
},
{
    term: "Mental Model",
    definition: "Cách người chơi tự hình dung luật chơi và quan hệ nhân quả trong đầu. Game giỏi là game xây được mental model rõ và ít phản bội nó."
},
{
    term: "Expectation Setting",
    definition: "Quá trình game dạy người chơi nên kỳ vọng điều gì về độ khó, nhịp, reward, punishment và logic hệ thống."
},
{
    term: "Expectation Violation",
    definition: "Khi game cố tình phá kỳ vọng của người chơi để tạo bất ngờ, sợ hãi hoặc chiều sâu. Làm ngu thì thành khó chịu, làm đúng thì thành đỉnh."
},
{
    term: "Rule Signaling",
    definition: "Cách game báo cho người chơi biết luật gì đang áp dụng thông qua hình ảnh, âm thanh, bố cục, animation hoặc phản hồi hệ thống."
},
{
    term: "System Legibility",
    definition: "Mức độ mà người chơi có thể đọc, hiểu và dự đoán được logic của một hệ thống phức tạp."
},
{
    term: "Local Maximum",
    definition: "Trạng thái người chơi tìm được một chiến thuật hiệu quả trước mắt nên dừng khám phá thêm, dù vẫn còn chiến thuật mạnh hơn."
},
{
    term: "Mastery Trap",
    definition: "Tình huống người chơi nghĩ mình đã hiểu game nhưng thật ra mới chỉ bám vào một lớp nông, khiến trải nghiệm sớm bị nhàm."
},
{
    term: "False Choice",
    definition: "Lựa chọn nhìn có vẻ đa dạng nhưng kết quả gần như giống nhau hoặc có một đáp án rõ ràng vượt trội."
},
{
    term: "Illusion of Choice",
    definition: "Thiết kế tạo cảm giác người chơi đang kiểm soát hoặc chọn đường đi riêng dù hệ thống thực tế khá tuyến tính."
},
{
    term: "Decision Cost",
    definition: "Cái giá mà người chơi phải trả khi ra quyết định, có thể là tài nguyên, thời gian, rủi ro hoặc cơ hội bị mất."
},
{
    term: "Opportunity Cost",
    definition: "Giá trị của lựa chọn tốt nhất bị bỏ qua khi người chơi chọn một phương án khác."
},
{
    term: "Path Dependency",
    definition: "Việc lựa chọn sớm ảnh hưởng mạnh đến những lựa chọn hoặc kết quả có thể xảy ra về sau."
},
{
    term: "Strategic Depth",
    definition: "Chiều sâu chiến thuật đến từ nhiều lớp quyết định, phản quyết định, đọc tình huống và tối ưu dài hạn."
},
{
    term: "Tactical Depth",
    definition: "Chiều sâu ở cấp tình huống ngắn hạn, nơi người chơi phải phản ứng đúng với dữ kiện trước mắt."
},
{
    term: "Emergent Complexity",
    definition: "Độ phức tạp phát sinh từ tương tác giữa các luật đơn giản, không phải từ việc nhét thêm hàng đống cơ chế rời rạc."
},
{
    term: "Combinatorial Depth",
    definition: "Chiều sâu đến từ số lượng cách kết hợp meaningful giữa kỹ năng, item, unit, trạng thái hoặc địa hình."
},
{
    term: "Systemic Synergy",
    definition: "Sự cộng hưởng giữa nhiều hệ thống lớn khiến hành vi ở một hệ thống tạo hậu quả đáng kể lên hệ thống khác."
},
{
    term: "Systemic Friction",
    definition: "Ma sát có chủ đích giữa các hệ thống để ép người chơi phải đánh đổi thay vì tối ưu mọi thứ cùng lúc."
},
{
    term: "Counter-System",
    definition: "Một hệ hoặc lớp luật được thiết kế để kìm hãm, đối trọng hoặc kiểm soát sức mạnh của một hệ khác."
},
{
    term: "Closed Economy",
    definition: "Nền kinh tế mà phần lớn tài nguyên lưu thông trong vòng khép kín, có nguồn vào và nguồn ra được kiểm soát chặt."
},
{
    term: "Open Economy",
    definition: "Nền kinh tế cho phép tài nguyên hoặc giá trị di chuyển rộng và khó kiểm soát hơn, thường thấy khi có trading giữa người chơi."
},
{
    term: "Economic Pressure",
    definition: "Áp lực mà hệ thống tài nguyên tạo lên quyết định của người chơi, buộc họ phải ưu tiên, tiết kiệm hoặc chấp nhận rủi ro."
},
{
    term: "Dominant Loop",
    definition: "Vòng lặp mạnh đến mức nuốt hết các loop còn lại, làm người chơi tối ưu một hành vi duy nhất và phá sự đa dạng."
},
{
    term: "Secondary Loop",
    definition: "Vòng lặp phụ hỗ trợ, bổ sung hoặc làm giàu loop chính mà không được phép lấn át nó."
},
{
    term: "Loop Health",
    definition: "Mức độ một gameplay loop còn giữ được giá trị sau nhiều lần lặp, không sụp đổ vì nhàm, exploit hoặc reward cạn."
},
{
    term: "Loop Collapse",
    definition: "Khi một loop mất ý nghĩa vì người chơi tìm ra cách phá, reward không còn hấp dẫn hoặc decision space bị co lại."
},
{
    term: "Retention Driver",
    definition: "Yếu tố cụ thể khiến người chơi quay lại game như progress dang dở, social obligation, event, build chưa hoàn thiện hoặc reward hẹn giờ."
},
{
    term: "Engagement Driver",
    definition: "Yếu tố thúc đẩy người chơi ở lại lâu hơn trong một phiên chơi như nhiệm vụ dây chuyền, challenge, social play hoặc dopamine reward."
},
{
    term: "Behavior Shaping",
    definition: "Thiết kế phần thưởng, giới hạn và phản hồi để dần uốn hành vi người chơi theo hướng mong muốn."
},
{
    term: "Habit Formation",
    definition: "Quá trình game xây dựng thói quen quay lại thông qua nhịp reward, mục tiêu ngắn hạn và cảm giác mất mát nếu bỏ lỡ."
},
{
    term: "Compounding Value",
    definition: "Giá trị tăng dần theo thời gian khi một quyết định sớm tạo lợi ích lũy kế về sau."
},
{
    term: "Delayed Gratification",
    definition: "Thiết kế để người chơi chấp nhận nhịn lợi ích trước mắt nhằm đạt phần thưởng lớn hơn ở tương lai."
},
{
    term: "Immediate Gratification",
    definition: "Phần thưởng đến ngay sau hành động để củng cố học tập, duy trì hứng thú và tạo cảm giác phản hồi nhanh."
},
{
    term: "Payoff Horizon",
    definition: "Khoảng thời gian từ lúc người chơi đầu tư đến lúc họ nhận được giá trị thực sự từ đầu tư đó."
},
{
    term: "Progression Pacing",
    definition: "Nhịp độ mà game trao sức mạnh, nội dung mới và cảm giác tiến bộ cho người chơi."
},
{
    term: "Progression Trough",
    definition: "Khoảng chững trong tiến trình nơi người chơi không cảm thấy mạnh hơn, không mở khóa gì đáng kể và dễ mất động lực."
},
{
    term: "Power Budget",
    definition: "Ngân sách sức mạnh mà designer phân bổ cho class, build, item hoặc encounter để giữ balance tổng thể."
},
{
    term: "Complexity Budget",
    definition: "Giới hạn lượng độ phức tạp mà một feature, system hoặc giai đoạn game được phép gánh."
},
{
    term: "Attention Budget",
    definition: "Lượng chú ý hữu hạn mà người chơi có thể dành cho các yếu tố trên màn hình hoặc trong một thời điểm."
},
{
    term: "Noise Floor",
    definition: "Mức độ thông tin, hiệu ứng hoặc tín hiệu nền thấp nhất trên màn hình trước khi mọi thứ bắt đầu khó đọc."
},
{
    term: "Signal-to-Noise Ratio",
    definition: "Tỉ lệ giữa thông tin thật sự quan trọng và phần rác gây nhiễu trong UI, VFX, âm thanh hoặc level."
},
{
    term: "Saliency",
    definition: "Mức độ một yếu tố nổi bật và tự kéo sự chú ý của người chơi."
},
{
    term: "Information Hierarchy",
    definition: "Thứ tự ưu tiên của thông tin mà game muốn người chơi nhận ra đầu tiên, thứ hai, thứ ba."
},
{
    term: "Information Scent",
    definition: "Dấu hiệu nhỏ cho người chơi cảm giác rằng đi theo hướng này sẽ dẫn tới giá trị, bí mật hoặc mục tiêu."
},
{
    term: "Breadcrumb Economy",
    definition: "Cách phân bổ những tín hiệu dẫn đường nhỏ sao cho người chơi luôn có mồi để theo nhưng vẫn thấy mình tự khám phá."
},
{
    term: "Curiosity Gap",
    definition: "Khoảng thiếu thông tin vừa đủ khiến người chơi muốn tiến thêm để biết tiếp chuyện gì sẽ xảy ra."
},
{
    term: "Mystery Box Design",
    definition: "Thiết kế che giấu một phần thông tin hoặc phần thưởng để kích thích tò mò và dự đoán."
},
{
    term: "Onboarding Debt",
    definition: "Hậu quả tích tụ khi game không dạy đúng từ đầu, khiến về sau phải vá bằng tooltip, pop-up hoặc ép tutorial dài dòng."
},
{
    term: "Reinforcement Learning",
    definition: "Trong bối cảnh design, là cách game dùng phần thưởng và hình phạt để khiến người chơi tự học hành vi hiệu quả."
},
{
    term: "Mechanical Literacy",
    definition: "Mức độ người chơi hiểu ngôn ngữ mechanic của game và biết áp dụng chúng chính xác."
},
{
    term: "Pattern Literacy",
    definition: "Khả năng đọc quy luật lặp, biến thể và tín hiệu của boss, puzzle hoặc AI."
},
{
    term: "Knowledge Check",
    definition: "Thử thách kiểm tra xem người chơi đã hiểu một luật, một pattern hoặc một hệ thống nào đó chưa."
},
{
    term: "Execution Check",
    definition: "Thử thách kiểm tra khả năng thao tác và timing thay vì kiểm tra kiến thức."
},
{
    term: "Build Check",
    definition: "Thử thách kiểm tra xem người chơi đã chuẩn bị build, item hoặc loadout đủ đúng chưa."
},
{
    term: "Stat Check",
    definition: "Tình huống kết quả phụ thuộc quá nặng vào chỉ số thay vì kỹ năng hoặc chiến thuật."
},
{
    term: "Soft Skill Check",
    definition: "Bài test nhắm vào kỹ năng khó định lượng như kiên nhẫn, quan sát, định vị, quản lý áp lực hoặc đọc đối thủ."
},
{
    term: "Mechanical Depth",
    definition: "Chiều sâu đến từ việc một mechanic đơn lẻ có nhiều ứng dụng, timing, trạng thái và tương tác hơn vẻ ngoài ban đầu."
},
{
    term: "Mechanical Expression",
    definition: "Mức độ mà người chơi có thể thể hiện trình độ thông qua việc dùng mechanic một cách tinh vi."
},
{
    term: "Verb Compression",
    definition: "Kỹ thuật làm cho một hành động cơ bản có nhiều công dụng tùy ngữ cảnh thay vì thêm quá nhiều nút riêng."
},
{
    term: "Orthogonality",
    definition: "Mức độ các hệ thống hoặc lựa chọn khác nhau tạo ra giá trị khác nhau thay vì chỉ là phiên bản đổi màu của nhau."
},
{
    term: "Lateral Choice",
    definition: "Lựa chọn mở ra phong cách chơi khác chứ không đơn thuần là mạnh hơn."
},
{
    term: "Vertical Choice",
    definition: "Lựa chọn chủ yếu làm tăng sức mạnh trực tiếp theo trục hơn-kém rõ ràng."
},
{
    term: "Build Commitment",
    definition: "Mức độ mà người chơi bị khóa vào hướng build sau một chuỗi lựa chọn đầu tư."
},
{
    term: "Respec Pressure",
    definition: "Áp lực khiến người chơi muốn reset build vì meta, sai lầm trước đó hoặc nội dung sau yêu cầu khác."
},
{
    term: "Degenerate Play",
    definition: "Hành vi tối ưu nhưng phá trải nghiệm, ví dụ đứng farm vô hạn, kite ngu AI, spam một giải pháp duy nhất."
},
{
    term: "Exploit Surface",
    definition: "Tổng số điểm mà hệ thống có thể bị người chơi lợi dụng để phá balance hoặc bypass ý đồ thiết kế."
},
{
    term: "Failing Gracefully",
    definition: "Thiết kế để khi người chơi chơi chưa tốt, họ vẫn hiểu chuyện gì xảy ra và còn động lực thử lại."
},
{
    term: "Punishment Clarity",
    definition: "Mức độ rõ ràng của hình phạt để người chơi thấy mình bị phạt vì gì và có thể học được gì."
},
{
    term: "Mercy Window",
    definition: "Khoảng khoan dung ngắn hệ thống cho người chơi cơ hội phục hồi thay vì bị trừng phạt liên hoàn."
},
{
    term: "Recovery Arc",
    definition: "Quãng chuyển từ trạng thái thua thiệt quay lại trạng thái có thể kiểm soát tình hình."
},
{
    term: "Tension Curve",
    definition: "Đường lên xuống của áp lực, nguy hiểm và kỳ vọng cảm xúc trong một đoạn chơi."
},
{
    term: "Release Valve",
    definition: "Khoảng thở có chủ đích sau áp lực cao, giúp người chơi hồi phục tinh thần và tái sẵn sàng cho đợt tiếp theo."
},
{
    term: "Pressure Stack",
    definition: "Việc chồng nhiều nguồn áp lực cùng lúc như thời gian, địch, tài nguyên thiếu, tầm nhìn xấu và mục tiêu phụ."
},
{
    term: "Tempo Control",
    definition: "Khả năng của game hoặc người chơi trong việc ép nhịp trận đấu nhanh lên hoặc chậm lại."
},
{
    term: "Initiative",
    definition: "Lợi thế về quyền ra nhịp hoặc buộc đối thủ phải phản ứng theo mình."
},
{
    term: "Threat Projection",
    definition: "Phạm vi và cách một đơn vị, skill hoặc hệ thống tạo vùng nguy hiểm mà đối thủ phải tôn trọng."
},
{
    term: "Zone Control",
    definition: "Khả năng kiểm soát không gian, ép đường đi hoặc cấm đối thủ đứng ở một khu vực."
},
{
    term: "Space Denial",
    definition: "Tạo nguy hiểm ở một vùng để buộc người chơi khác rời đi, đi vòng hoặc trì hoãn hành động."
},
{
    term: "Positional Advantage",
    definition: "Lợi thế đến từ địa hình, tầm nhìn, khoảng cách, cao độ hoặc đường rút."
},
{
    term: "Temporal Advantage",
    definition: "Lợi thế đến từ việc hành động sớm hơn, hồi chiêu nhanh hơn hoặc ép đối thủ lỡ nhịp."
},
{
    term: "Action Economy",
    definition: "Giá trị tương đối của mỗi hành động trong một lượt, một nhịp combat hoặc một khoảng thời gian ngắn."
},
{
    term: "Turn Efficiency",
    definition: "Mức độ người chơi tận dụng tối đa giá trị từ một lượt hoặc một chu kỳ hành động."
},
{
    term: "Dead Turn",
    definition: "Lượt chơi không tạo giá trị đáng kể, thường do thiếu lựa chọn tốt hoặc design quá bó tay."
},
{
    term: "Dead Stat",
    definition: "Chỉ số tồn tại nhưng hiếm khi quan trọng hoặc không đủ tác động để người chơi quan tâm."
},
{
    term: "Stat Saturation",
    definition: "Khi tăng thêm chỉ số gần như không còn cảm nhận rõ vì đã chạm trần hữu dụng."
},
{
    term: "Diminishing Returns",
    definition: "Cơ chế khiến đầu tư thêm vào cùng một hướng cho lợi ích giảm dần, nhằm chặn việc dồn một chỉ số vô hạn."
},
{
    term: "Break Point",
    definition: "Ngưỡng mà khi vượt qua, hiệu quả của build, skill hoặc chiến thuật thay đổi rõ rệt."
},
{
    term: "Threshold Design",
    definition: "Thiết kế xoay quanh các mốc kích hoạt có ý nghĩa thay vì tăng tuyến tính đều đều."
},
{
    term: "Granularity",
    definition: "Mức độ mịn hay thô của các bước điều chỉnh, ví dụ damage tăng từng 1 điểm hay từng 10 điểm."
},
{
    term: "Parameter Sensitivity",
    definition: "Mức độ một thay đổi nhỏ ở tham số có thể tạo ảnh hưởng lớn đến trải nghiệm tổng thể."
},
{
    term: "Tuning Levers",
    definition: "Những tham số mà designer có thể kéo lên xuống để chỉnh trải nghiệm mà không phải viết lại hệ thống."
},
{
    term: "Design Surface Area",
    definition: "Tổng số điểm mà một feature chạm vào các hệ thống khác, từ đó quyết định chi phí làm, test và balance."
},
{
    term: "Cascade Effect",
    definition: "Hiệu ứng dây chuyền khi thay đổi một biến nhỏ nhưng làm rung chuyển nhiều hệ thống liên quan."
},
{
    term: "Dependency Web",
    definition: "Mạng lưới phụ thuộc giữa các tính năng, content và hệ thống, càng rối càng khó sửa mà không vỡ chỗ khác."
},
{
    term: "Content Throughput",
    definition: "Tốc độ mà team có thể sản xuất, kiểm thử và đẩy nội dung mới vào game một cách ổn định."
},
{
    term: "Content Scalability",
    definition: "Khả năng một hệ thống tiếp nhận thêm nhiều content mới mà không đội chi phí vận hành quá mức."
},
{
    term: "System Burden",
    definition: "Gánh nặng mà một hệ thống áp lên nhận thức người chơi, QA, balance, content pipeline và live ops."
},
{
    term: "Live Balance",
    definition: "Quá trình điều chỉnh game đang vận hành thật với dữ liệu và phản hồi cộng đồng thay vì chỉ dựa trên cảm giác nội bộ."
},
{
    term: "Meta Stability",
    definition: "Mức độ meta giữ được sự đa dạng và không bị một lời giải duy nhất thống trị quá lâu."
},
{
    term: "Meta Volatility",
    definition: "Mức độ meta thay đổi nhanh sau patch, khám phá mới hoặc tối ưu từ cộng đồng."
},
{
    term: "Patch Shock",
    definition: "Cú sốc lên meta và hành vi cộng đồng sau một bản cập nhật lớn hoặc một thay đổi balance mạnh."
},
{
    term: "Player Segmentation by Intent",
    definition: "Phân nhóm người chơi theo mục đích đến với game như cạnh tranh, khám phá, social, collection hoặc chill."
},
{
    term: "Psychographic Segmentation",
    definition: "Phân nhóm người chơi theo động lực và kiểu hành vi tâm lý thay vì chỉ theo tuổi, quốc gia hoặc thiết bị."
},
{
    term: "Motivation Conflict",
    definition: "Khi một hệ thống phục vụ rất tốt một nhóm động lực người chơi nhưng lại làm hại nhóm khác."
},
{
    term: "Design for Aspiration",
    definition: "Thiết kế để người chơi luôn nhìn thấy phiên bản giỏi hơn của chính mình và có lý do để leo tới đó."
},
{
    term: "Skill Gradient",
    definition: "Độ dốc tăng trưởng kỹ năng từ người mới tới cao thủ. Gradient đẹp giúp học lên đều, không bị vách đá."
},
{
    term: "Learning Cliff",
    definition: "Điểm mà độ khó học tăng gắt tới mức nhiều người chơi rơi rụng vì không theo kịp."
},
{
    term: "Discovery Layer",
    definition: "Lớp nội dung hoặc mechanic mà người chơi chỉ nhận ra sau khi đã chơi đủ lâu hoặc quan sát đủ sâu."
},
{
    term: "Hidden Depth",
    definition: "Chiều sâu không phô trương ngay từ đầu nhưng dần lộ ra khi người chơi đầu tư thời gian và kỹ năng."
},
{
    term: "Surface Appeal",
    definition: "Sức hút ở lớp nhìn đầu tiên như hình ảnh, premise, motion, immediate feedback hoặc control dễ vào."
},
{
    term: "Depth Curve",
    definition: "Cách chiều sâu của game mở ra dần theo thời gian thay vì đập toàn bộ vào mặt người chơi từ phút đầu."
},
{
    term: "Clarity under Load",
    definition: "Khả năng game vẫn giữ rõ ràng khi màn hình đông đúc, hiệu ứng dày và áp lực cao."
},
{
    term: "Compression Test",
    definition: "Bài kiểm tra xem hệ thống có còn ổn khi nhét nhiều tác nhân cùng lúc vào một không gian hoặc thời điểm."
},
{
    term: "Extensibility",
    definition: "Khả năng một hệ thống được thiết kế từ đầu để sau này cắm thêm mechanic, content hoặc rule mới mà không phải đập đi xây lại."
},
{
    term: "Design Robustness",
    definition: "Mức độ một hệ thống còn giữ được chất lượng khi bị người chơi thử đủ kiểu, khi content tăng và khi meta tiến hóa."
},
{
    term: "System Fragility",
    definition: "Mức độ một hệ thống dễ gãy, dễ bị exploit hoặc dễ mất cân bằng khi có thay đổi nhỏ."
},
{
    term: "Golden Path",
    definition: "Lộ trình lý tưởng mà designer mong phần lớn người chơi sẽ đi qua để hiểu game đúng và thấy vui nhất."
},
{
    term: "Critical Path",
    definition: "Đường tiến trình tối thiểu cần hoàn thành để đi tới mục tiêu chính của game hoặc một mốc nội dung."
},
{
    term: "Off-Path Rewarding",
    definition: "Thiết kế thưởng cho người chơi lệch khỏi đường chính bằng bí mật, lore, tài nguyên hoặc shortcut."
},
{
    term: "Spatial Storytelling",
    definition: "Kể chuyện thông qua sắp xếp không gian, tuyến đường, tầm nhìn và quan hệ giữa các khu vực."
},
{
    term: "Encounter Read",
    definition: "Khoảnh khắc người chơi quan sát một tình huống và hiểu nhanh mối đe dọa, cơ hội và hướng tiếp cận."
},
{
    term: "Encounter Solve",
    definition: "Cách người chơi thực thi lời giải cho một encounter sau khi đã đọc được bài toán của nó."
},
{
    term: "Encounter Replay Variance",
    definition: "Mức độ cùng một encounter vẫn cho ra trải nghiệm khác nhau ở các lần chơi lại."
},
{
    term: "Authored Challenge",
    definition: "Thử thách được dàn dựng thủ công để kiểm tra rất cụ thể một kỹ năng, insight hoặc cảm xúc."
},
{
    term: "Systemic Challenge",
    definition: "Thử thách nảy sinh từ va chạm giữa các hệ thống chung, ít phụ thuộc script riêng từng màn."
},
{
    term: "Friction as Feature",
    definition: "Khi sự khó chịu nhỏ có chủ đích được giữ lại để tạo căng thẳng, nhập vai hoặc chiều sâu thay vì bị xóa sạch."
},
{
    term: "Elegance",
    definition: "Mức độ game đạt được chiều sâu lớn bằng số luật ít, rõ và liên kết đẹp."
},
{
    term: "Designerly Economy",
    definition: "Khả năng dùng ít công cụ, ít luật, ít content hơn nhưng khai thác ra nhiều trải nghiệm hơn."
},
{
    term: "Player Authorship",
    definition: "Mức độ người chơi cảm thấy câu chuyện, cách chơi hoặc chiến thắng là do chính họ tạo ra chứ không phải game dắt tay hoàn toàn."
},
{
    term: "Expressive Play",
    definition: "Lối chơi cho phép người chơi bộc lộ cá tính, gu chiến thuật hoặc phong cách riêng thông qua hệ thống."
},
{
    term: "Aspirational Content",
    definition: "Nội dung mà nhiều người chơi chưa chạm tới ngay nhưng nhìn vào là muốn luyện để chinh phục."
},
{
    term: "Mastery Payoff",
    definition: "Phần thưởng cảm xúc và hiệu quả hệ thống mà người chơi nhận được khi thật sự hiểu sâu và làm chủ game."
},
{
    term: "Lasting Depth",
    definition: "Chiều sâu còn đứng vững sau hàng chục giờ, hàng trăm giờ và sau cả khi cộng đồng đã tối ưu rất nhiều."
}
];
// Sắp xếp theo tên thuật ngữ (A-Z)
glossaryData.sort((a, b) => a.term.localeCompare(b.term, 'vi', { sensitivity: 'base' }));
// DOM elements
const gridContainer = document.getElementById('termsGrid');
const searchInput = document.getElementById('searchInput');
const resultCountSpan = document.getElementById('resultCount');
const modalOverlay = document.getElementById('termModal');
const modalTitle = document.getElementById('modalTermTitle');
const modalDefinitionPara = document.getElementById('modalDefinition');
const closeModalBtn = document.getElementById('closeModalBtn');

// Render cards theo từ khóa tìm kiếm
function renderTerms(filterKeyword = '') {
    const keywordLower = filterKeyword.trim().toLowerCase();
    let filteredTerms = [...glossaryData];

    if (keywordLower !== '') {
        filteredTerms = glossaryData.filter(item =>
            item.term.toLowerCase().includes(keywordLower) ||
            item.definition.toLowerCase().includes(keywordLower)
        );
    }

    const total = filteredTerms.length;
    resultCountSpan.innerHTML = `<i class="fas fa-layer-group"></i> ${total} thuật ngữ`;

    if (filteredTerms.length === 0) {
        gridContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-skull" style="font-size: 2rem; opacity: 0.6;"></i>
                <p style="margin-top: 1rem;">Không tìm thấy thuật ngữ "${escapeHtml(filterKeyword)}"</p>
                <p style="font-size: 0.8rem;">Hãy thử từ khóa khác như Core Loop, UX, NPC, Retention...</p>
            </div>
        `;
        return;
    }

    let cardsHTML = '';
    for (let i = 0; i < filteredTerms.length; i++) {
        const termObj = filteredTerms[i];
        const iconClass = getRandomEpicIcon(i);

        cardsHTML += `
            <div class="term-card" data-term-name="${escapeHtml(termObj.term)}">
                <div class="card-icon"><i class="${iconClass}"></i></div>
                <div class="term-name">${escapeHtml(termObj.term)}</div>
                <div class="click-hint"><i class="fas fa-mouse-pointer"></i> BẤM ĐỂ XEM CHI TIẾT</div>
            </div>
        `;
    }

    gridContainer.innerHTML = cardsHTML;
}

// Chọn icon
function getRandomEpicIcon(index) {
    const icons = [
        'fas fa-cogs', 'fas fa-map', 'fas fa-robot', 'fas fa-cube',
        'fas fa-dragon', 'fas fa-dice-d6', 'fas fa-code-branch', 'fas fa-users',
        'fas fa-hand-peace', 'fas fa-gamepad', 'fas fa-chess-queen', 'fas fa-skull',
        'fas fa-shield-alt', 'fas fa-meteor', 'fas fa-hat-wizard', 'fas fa-bolt',
        'fas fa-coins', 'fas fa-chart-line', 'fas fa-crosshairs', 'fas fa-brain'
    ];
    return icons[index % icons.length];
}

// Escape HTML
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/[&<>"]/g, function (m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            if (m === '"') return '&quot;';
            return m;
        })
        .replace(/'/g, '&#39;');
}

// Mở modal
function openModal(termName) {
    const foundTerm = glossaryData.find(item => item.term === termName);

    if (foundTerm) {
        modalTitle.innerText = foundTerm.term;
        modalDefinitionPara.innerText = foundTerm.definition;
    } else {
        modalTitle.innerText = termName;
        modalDefinitionPara.innerText = 'Định nghĩa chi tiết hiện đang được cập nhật. Hãy khám phá thêm thuật ngữ khác.';
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Đóng modal
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Click card
function handleCardClick(e) {
    const card = e.target.closest('.term-card');
    if (!card) return;

    const termAttr = card.getAttribute('data-term-name');
    if (termAttr) {
        openModal(termAttr);
    }
}

// Search
function onSearchInput() {
    const keyword = searchInput.value;
    renderTerms(keyword);
}

// ESC để đóng modal
function handleEscKey(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
}

// Click nền mờ để đóng modal
function handleOverlayClick(e) {
    if (e.target === modalOverlay) {
        closeModal();
    }
}

// Gắn sự kiện
function bindEvents() {
    searchInput.addEventListener('input', onSearchInput);
    gridContainer.addEventListener('click', handleCardClick);
    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', handleOverlayClick);
    window.addEventListener('keydown', handleEscKey);
}

// Init
function init() {
    renderTerms('');
    bindEvents();
}

init();